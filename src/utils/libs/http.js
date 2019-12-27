import Vue from 'vue';
import config from '../../config';

var host = config.host + (config.port ? (':' + config.port) : config.port) + config.base;

const _options = {
    timeout: 10000
}

/**
 * @desc get请求
 * @param {String} url - 地址
 * @param {Object} params - 参数
 * @param {Object} opts - 配置
 * @return {Promise}
 */
export const $GET = (url, params, opts) => {
    opts = {..._options, ...(opts || {})};
    url = url.indexOf('http') === 0 ? url : (host + url);
    params = { ...(params || {}),
        t: Date.now
    }
    opts = { ...opts,
        params
    };
    return new Promise((resolve, reject) => {
        Vue.http.get(url, opts).then((res) => {
            resolve(res.json())
        }, handleError(reject));
    })
}

/**
 * @desc jsonp请求
 * @param {String} url - 地址
 * @param {Object} params - 参数
 * @param {Object} opts - 配置
 * @return {Promise}
 */
export const $JSONP = (url, params, opts) => {
    opts = {..._options, ...(opts || {})};
    params = { ...(params || {}),
        t: Date.now
    }
    opts = { ...opts,
        params
    };
    url = url.indexOf('http') === 0 ? url : (host + url);
    return new Promise((resolve, reject) => {
        Vue.http.jsonp(url, opts).then((res) => {
            resolve(res.json())
        }, handleError(reject));
    })
}

/**
 * @desc post请求
 * @param {String} url - 地址
 * @param {Object} body - 发送数据
 * @param {Object} opts - 配置
 * @return {Promise}
 */
export const $POST = function (url, body, opts) {
    opts = {..._options, ...(opts || {})};
    url = url.indexOf('http') === 0 ? url : (host + url);
    return new Promise((resolve, reject) => {
        Vue.http.post(url, body, opts).then((res) => {
            resolve(res.json())
        }, handleError(reject));
    })
}

/**
 * @desc put请求
 * @param {String} url - 地址
 * @param {Object} body - 发送数据
 * @param {Object} opts - 配置
 * @return {Promise}
 */
export const $PUT = function (url, body, opts) {
    opts = {..._options, ...(opts || {})};
    url = url.indexOf('http') === 0 ? url : (host + url);
    return new Promise((resolve, reject) => {
        Vue.http.put(url, body, opts).then((res) => {
            resolve(res.json())
        }, handleError(reject));
    })
}


function handleError(reject){
    return function(err){
        if (!err || !err.data){
            return reject({});
        }

        if (err.data.errorCode == 5001 || err.data.errorCode == 1012 || err.data.errorCode == 1011){
            console.log(err);
        }else if(err.data.errorMessage && err.data.errorMessage.indexOf('Cannot get Jedis connection') > -1){
            err.data.errorMessage = '连接超时,请重试'
        }

        reject(err.data)
    }
}