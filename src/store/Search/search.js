//search模块小仓库
import { reqGetSearchInfo } from "@/api";
//    处理异步
const actions = {
  async getSearchList(context, params) {
    let result = await reqGetSearchInfo(params);
    if (result.code == 200) {
      context.commit("GETSEARCHLIST", result.data);
    }
  },
};
// 修改state唯一手段
const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList;
  },
};
// 仓库存放数据的地方
const state = {
  searchList: {},
};
// 理解为计算属性
// 可以把我们的数据进行 简化
const getters = {
  //当前参数state是当前仓库goodlist里的数据

  goodsList(state) {
    // 以防万一 我们避免返回undefined  加上空数组
    return state.searchList.goodsList||[];
  },
  trademarkList(state) {
    return state.searchList.trademarkList||[];
  },
  attrsList(state) {
    return state.searchList.attrsList||[];
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
