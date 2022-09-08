import {
  reqGetCode,
  reqUserRegister,
  reqUserLogin,
  reqUserInfo,
  reqLoginOut,
} from "@/api";
const actions = {
  // 注册模块
  async getCode(context, phone) {
    let result = await reqGetCode(phone);
    if (result.code == 200) {
      context.commit("GETCODE", result.data);
    }
  },
  async userRegister(context, user) {
    let result = await reqUserRegister(user);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("fail"));
    }
  },
  //   登录模块
  async userLogin(context, user) {
    let result = await reqUserLogin(user);
    if (result.code == 200) {
      context.commit("USERLOGIN", result.data.token);
      //   持久化存储token
      localStorage.setItem("TOKEN", result.data.token);
      return "ok";
    } else {
      return Promise.reject(new Error("fail"));
    }
  },

  async userInfo(context) {
    let result = await reqUserInfo();
    if (result.code == 200) {
      context.commit("USERINFO", result.data);
      return "ok";
    } else {
      return Promise.reject(new Error("fail"));
    }
  },
  async loginOut(context) {
    let result = await reqLoginOut();
    if (result.code == 200) {
      context.commit("CLEARUSER");
      localStorage.removeItem("TOKEN");
      return "ok";
    } else {
      return Promise.reject(new Error("fail"));
    }
  },
};
const mutations = {
  GETCODE(state, code) {
    state.code = code;
  },
  USERLOGIN(state, token) {
    state.token = token;
  },
  USERINFO(state, userInfo) {
    state.userInfo = userInfo;
  },
  CLEARUSER(state) {
    state.userInfo = {};
    state.token = "";
    state.code = "";
  },
};
const state = {
  code: "",
  token: "",
  userInfo: {},
};
const getters = {};
export default {
  namespaced: true,
  actions,
  mutations,
  getters,
  state,
};
