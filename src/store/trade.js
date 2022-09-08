import { reqAddressInfo, reqOrderInfo } from "@/api";
const actions = {
  async addressInfo(context) {
    let result = await reqAddressInfo();
    if (result.code == 200) {
      context.commit("ADDRESSINFO", result.data);
      return "ok";
    } else {
      return Promise.reject(new Error("fail"));
    }
  },
  async orderInfo(context) {
    let result = await reqOrderInfo();
    if (result.code == 200) {
      context.commit("ORDERINFO", result.data);
      return "ok";
    } else {
      return Promise.reject(new Error("fail"));
    }
  },
};
const mutations = {
  ADDRESSINFO(state, addressInfo) {
    state.addressInfo = addressInfo;
  },
  ORDERINFO(state, order) {
    state.order = order;
  },
};
const state = {
  addressInfo: [],
  order: {},
};
const getters = {
  detailArrayList() {
    return state.order.detailArrayList||[''];
  },
};
export default {
  namespaced: true,
  actions,
  mutations,
  getters,
  state,
};
