const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ESBuildPlugin, ESBuildMinifyPlugin } = require('esbuild-loader');


console.log('process.env.NODE_ENV -----', process.env.NODE_ENV)
const config = require('../config');
const utils = require('./utils');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

const webpackConfig = {
    context: path.resolve(__dirname, '../'),
    entry: {
        app: ['./src/index.tsx'],
    },
    mode: process.env.NODE_ENV,
    output: {
        path: config.build.assetsRoot,
        filename: '[name].bundle.js',
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
            '@lib': resolve('./src/lib'),
            '@const': resolve('./src/lib/constants'),
            '@hooks': resolve('./src/hooks'),
            '@keys': resolve('./src/keyfactory/QueryKeys'),
            '@atm': resolve('./src/atoms'),
            '@cmp': resolve('./src/components'),
            '@tmp': resolve('./src/template'),
            '@store': resolve('./src/store'),
            '@types': resolve('./src/types'),
            '@page': resolve('./src/page'),
        },
    },
    module: {
        rules: [
            ...(config.dev.useEslint ? [createLintingRule()] : []),
            {
                test: /\.(ts|tsx)?$/i,
                exclude: /(node_modules)/,
                // use: {
                //     loader: 'babel-loader',
                //     options: {
                //       presets: ['@babel/preset-env'],
                //       plugins: ['@babel/plugin-transform-runtime']
                //     }
                //   }
                loader: 'esbuild-loader',
                options: {
                    loader: 'tsx', // Or 'ts' if you don't need tsx
                    target: 'es2015',
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]'),
                },
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]'),
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ],
    },
    // node: {
    //     setImmediate: false,
    //     dgram: 'empty',
    //     fs: 'empty',
    //     net: 'empty',
    //     tls: 'empty',
    //     child_process: 'empty',
    // },
    optimization: {
        minimize: true,
        minimizer: [
            new ESBuildMinifyPlugin({
                target: 'es2015', // Syntax to compile to (see options below for possible values)
                css: true,
                pure: process.env.NODE_ENV === "production" ? ['console.log'] : []
            }),
        ],
        moduleIds: 'named',
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                reactVendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: 'reactVendor',
                },
                utilityVendor: {
                    test: /[\\/]node_modules[\\/](lodash|dayjs)[\\/]/,
                    name: 'utilityVendor',
                    chunks: 'all',
                },
                vendors: {
                    test: /[\\/]node_modules[\\/](!lodash)(!dayjs)(!react)(!react-dom)[\\/]/,
                    name: 'vendor',
                    priority: -10,
                },
                // default: {
                //     minChunks: 2,
                //     priority: -20,
                //     reuseExistingChunk: true,
                // },
            },
        },
        runtimeChunk: {
            //추가 부분
            name: 'runtime',
        },
    },
    plugins: [
        new ESBuildPlugin(), //속도가 느릴시 추가 설치
    ],
};

module.exports = webpackConfig;