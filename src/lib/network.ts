import axios, { AxiosError } from 'axios';
import qs from 'qs';

const axiosHeaders = {
    'Content-Type': 'application/json;charset=utf-8;',
};

const _axios = axios.create({
    baseURL: 'http://localhost:3000',
    // baseURL: 'https://bpdiarydev.openit.co.kr',
    headers: axiosHeaders,
    timeout: 100000,
    paramsSerializer: {
        encode: (params) => qs.stringify(params, { arrayFormat: 'repeat' })
        //indexes: null // by default: false
    }
});


_axios.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error: AxiosError) => {

    }
);

_axios.interceptors.request.use(
    (request) => {

        return request;
    },
    (error) => {

    }
);

export default _axios;