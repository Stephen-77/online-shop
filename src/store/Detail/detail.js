import { reqGoodsIfo, reqAddOrUpdateShopCart } from "@/api";

import { getUuid } from "@/utils/uuid_token";
const actions = {
  // 获取产品信息
  async getGoodInfo(context, skuId) {
    let result = await reqGoodsIfo(skuId);
    if (result.code == 200) {
      context.commit("GETGOODINFO", result.data);
    }
  },
  async addOrUpdateShopCart(context, { skuId, skuNum }) {
    let result = await reqAddOrUpdateShopCart(skuId, skuNum);
    if (result.code == 200) {
      return "ok";
    } else {
      // 代表加入购物车失败
      return Promise.reject(new Error("faile"));
    }
  },
};
const mutations = {
  GETGOODINFO(state, goodInfo) {
    state.goodInfo = goodInfo;
  },
};
const state = {
  goodInfo: {},
  // 生成随机字符串作为标识
  uuid_token: getUuid(),
};
const getters = {
  categoryView() {
    return state.goodInfo.categoryView || {};
  },
  skuInfo() {
    return state.goodInfo.skuInfo || {};
  },
  spuSaleAttrList() {
    return state.goodInfo.spuSaleAttrList || {};
  },
  skuImageList() {
    return state.goodInfo.skuInfo.skuImageList || {};
  },
};
export default {
  namespaced: true,
  actions,
  mutations,
  getters,
  state,
};
