import axios from "axios";
// import moduleOneMock from "./moduleThreeMock.json";
import { Message } from "element-ui";
const instance = axios.create({
  baseURL: "",
  timeout: 3000
});
// 拦截器
instance.interceptors.request.use(
  function(config) {
    // console.log("正在发送请求哦..."); // 添加loading效果
    // 登录流程控制中，根据本地是否存在token判断用户的登录情况
    // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
    // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
    // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
    // const token = store.state.token;
    // token && (config.headers.Authorization = token);

    config.data = JSON.stringify(config.data);
    config.headers = {
      "Content-Type": "application/json"
    };

    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function(response) {
    // console.log("请求成功啦...", response);
    if (response.status === 200) {
      //   Message.success("请求后台数据成功!");
      return response.data;
    }

    // //mock假数据
    // const { fromPage } = response.config.params;
    // const arr = [
    //   {
    //     mock: moduleOneMock,
    //     page: "moduleThree"
    //   }
    // ];
    // let mockList;
    // let obj = arr.find(item => item.page === fromPage);

    // if (obj) {
    //   mockList = obj.mock;
    // } else {
    //   mockList = [];
    // }
    // return {
    //   status: 200,
    //   data: mockList
    // };
  },
  function(error) {
    Message.error("请求接口失败!");
    return Promise.reject(error);
  }
);

export default instance;
