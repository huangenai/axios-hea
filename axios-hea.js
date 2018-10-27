"use strict";

import axios from "axios";
import qs from "qs";

//添加请求拦截器
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//添加响应拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.resolve(error.response);
  }
);

//基础配置
axios.defaults.baseURL = "https://www.xxxx/api";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.timeout = 10000;

function checkStatus(response) {
  return new Promise((resolve, reject) => {
    if (
      response &&
      (response.status === 200 ||
        response.status === 304 ||
        response.status === 400)
    ) {
      resolve(response.data);
    } else {
      reject({
        state: "0",
        message: "网络异常"
      });
    }
  });
}

export default {
  post(url, params) {
    return axios({
      method: "post",
      url,
      data: params
    }).then(response => {
      return checkStatus(response);
    });
  },
  get(url, params) {
    params = qs.stringify(params);
    return axios({
      method: "get",
      url,
      params
    }).then(response => {
      return checkStatus(response);
    });
  }
};