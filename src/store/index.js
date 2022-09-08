import Vue from "vue";
import Vuex from "vuex";
import detail from "./Detail/detail";
import shopcart from "./ShopCart/ShopCart";
import user from "./user";
import trade from "./trade";
import pay from "./pay";
Vue.use(Vuex);

// 引入小仓库
import home from "./Home";
import search from "./Search/search";
export default new Vuex.Store({
  modules: {
    home: home,
    search: search,
    detail: detail,
    shopcart,
    user,
    trade,
    pay
  },
});
