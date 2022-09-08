import Vue from "vue";
import App from "./App.vue";
// 三级联动组件=全局组件
import TypeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";
import Pagination from "@/components/Pagination";
// 第一个参数是全局组件的名字，第二个参数的是哪一个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);
// 引入路由
import router from "./router";
// 引入vuex的store
import store from "./store";
// import { reqCategoryList } from "@/api/index";
Vue.config.productionTip = false;
// reqCategoryList();
// 引入mock中的数据
import "@/mock/mockServe";
//引入swiper
import "swiper/css/swiper.css";

// 统一引入
// 统一接口 api文件里的全部请求函数
import * as API from "@/api";

import { Button, MessageBox } from "element-ui";
Vue.component(Button.name, Button);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

// 懒加载
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload)

// 引入表单插件
import "@/plugins/validate"
new Vue({
  render: (h) => h(App),
  router: router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
   
  },
}).$mount("#app");
