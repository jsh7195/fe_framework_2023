'use strict';
const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const portfinder = require('portfinder');
// const FriendlyErrorsPlugin = require('friendly-errors-plugin'); -> webpack 5 지원안함, legacy 옵션 부여시 다른 module 설치시 종속성 오류가 발생
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

//속도 측정
// const SpeedMeasurePlugin = require('speed-measure-webpack5-plugin');
// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// const smp = new SpeedMeasurePlugin();

const utils = require('./utils');
const config = require('../config');
const baseWebpackConfig = require('./webpack.base.conf');

const HOST = '0.0.0.0'; // process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT);

const localWebpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.dev.cssSourceMap,
            usePostCSS: true,
        }),
    },
    // cheap-module-eval-source-map is faster for development
    devtool: config.dev.devtool,

    // these devServer options should be customized in /config/index.js
    devServer: {
        historyApiFallback: true,
        // historyApiFallback: {
        //     rewrites: [
        //         {
        //             from: /.*/,
        //             to: path.posix.join(config.dev.assetsPublicPath, 'index.html'),
        //         },
        //     ],
        // },
        hot: false,
        compress: true,
        host: HOST || config.dev.host,
        port: PORT || config.dev.port,
        open: config.dev.autoOpenBrowser,
        // publicPath: config.dev.assetsPublicPath,
        // static: {
        //     directory: path.resolve(__dirname, '../assets'),
        //     publicPath: config.dev.assetsPublicPath,
        // },
        // static: {
        //     directory: path.join(__dirname, 'public'),
        // },
        static: '../dist',
        proxy: require('../config/proxy-table')
        // quiet: true, // necessary for FriendlyErrorsPlugin
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../config/local.env'),
        }),
        
        // new webpack.NamedModulesPlugin(), // detail path -> v5 optimization
        new webpack.NoEmitOnErrorsPlugin(), // when build error, not export asset
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
        }),
        // new webpack.HotModuleReplacementPlugin(),
        // copy custom static assets
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../assets'),
                to: config.dev.assetsSubDirectory,
                ignore: ['.*'],
            },
        ]),
    ],
});


module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = process.env.PORT || config.dev.port;
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err);
        } else {
            // publish the new Port, necessary for e2e tests
            process.env.PORT = port;
            // add port to devServer config
            localWebpackConfig.devServer.port = port;

            // Add FriendlyErrorsPlugin
            // smp.wrap(localWebpackConfig).plugins.push(
            //     new FriendlyErrorsPlugin({
            //         compilationSuccessInfo: {
            //             messages: [`Your application is running here: http://${localWebpackConfig.devServer.host}:${port}`],
            //         },
            //         onErrors: config.dev.notifyOnErrors ? utils.createNotifierCallback() : undefined,
            //     })
            // );

 
            resolve(localWebpackConfig);
        }
    });
});
