//对于axios进行二次封装
import axios from "axios";
//引入进度条
import nprogress from "nprogress";
import "nprogress/nprogress.css";

import store from "@/store";
//利用axios的create方法创建一个axios实例
const requests = axios.create({
    //配置对象
    //基础路径
    baseURL: "/api",
    //请求超时的时间
    timeout: 6000,
});
//请求拦截器
requests.interceptors.request.use((config) => {
    //需要携带token带给服务器
    if (store.state.user.token) {
        config.headers.token = store.state.user.token;
    }
    //进度条开始
    nprogress.start();
    //config是配置对象，里面有一个header请求头属性很重要
    return config;
});
//响应拦截器
requests.interceptors.response.use((res) => {
    //进度条结束
    nprogress.done();
    //成功的回调函数
    return res.data;
}, (err) => {
    //服务器响应失败的回调函数
    return Promise.reject(new Error('error'));
})

//对外暴露
export default requests;