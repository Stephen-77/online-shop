import { reqCartList, reqDeleteCartById, reqCartIsChecked } from "@/api";
const actions = {
  // 获取产品信息
  async getCartList(context) {
    let result = await reqCartList();
    if (result.code == 200) {
      context.commit("GETCARTLIST", result.data);
    }
  },
  async deleteCartList(context, skuId) {
    let result = await reqDeleteCartById(skuId);
  },
  async cartIsChecked(context, { skuId, isChecked }) {
    let result = await reqCartIsChecked(skuId, isChecked);
  },
  deleteAllCart({ getters, dispatch }) {
    let promiseAll = [];
    getters.cartInfoList.forEach((element) => {
      let result =
        element.isChecked == 1 ? dispatch("deleteCartList", element.skuId) : "";
      promiseAll.push(result);
    });
    // promise里每一个promise都返回成功才能实现
    return Promise.all(promiseAll);
  },
};
const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList;
  },
};
const state = {
  cartList: [],
};
const getters = {
  cartInfoList() {
    return state.cartList[0].cartInfoList || [""];
  },
};
export default {
  namespaced: true,
  actions,
  mutations,
  getters,
  state,
};
