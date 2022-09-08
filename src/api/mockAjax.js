import axios from "axios";
// 引入进度条
import nprogress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css"
// start进度条开始 done请求结束
// 利用axios对象的方法create，去创建一个axios实例
const mockRequests = axios.create({
  baseURL: "/mock",
  //   代表请求时间
  timeout: 5000,
});
// 请求拦截器：在发出请求之前，请求拦截器可以监测到，可以在请求发出去之前做一些事情
mockRequests.interceptors.request.use((config) => {
  // config配置对象，对象里面有一个属性很重要，headers请求头
  nprogress.start();
  return config;
});
// 响应拦截器
mockRequests.interceptors.response.use(
  (res) => {
    nprogress.done();
    return res.data;
    
  },
  (error) => {
    // 响应失败
    return Promise.reject(new Error("faile"));
  }
);

export default mockRequests;
