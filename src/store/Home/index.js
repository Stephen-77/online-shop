//home模块小仓库
import { reqCategoryList } from "@/api/index";
import { reqGetBannerList } from "@/api/index";
import { reqGetFloorList } from "@/api/index";
//    处理异步
const actions = {
  async categoryList(context) {
    let result = await reqCategoryList();
    if (result.code == 200) {
      context.commit("CATEGORYLIST", result.data);
    } else {
      console.log("error");
    }
  },
  async getBannerList(context) {
    let result = await reqGetBannerList();
    if (result.code == 200) {
      context.commit("GETBANNERLIST", result.data);
    }
  },
  async getFloorList(context) {
    let result = await reqGetFloorList();
    if (result.code == 200) {
      context.commit("GETFLOORLIST", result.data);
    }
  },
};
// 修改state唯一手段
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList.slice(0, 15);
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  GETFLOORLIST(state, floorList) {
    state.floorList = floorList;
  },
};
// 仓库存放数据的地方
const state = {
  categoryList: [],
  bannerList: [],
  floorList: [],
};
// 理解为计算属性
const getters = {};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
