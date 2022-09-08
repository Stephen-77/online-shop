import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import user from "@/store/user";
Vue.use(VueRouter);
import routes from "./router";
let router = new VueRouter({
  // routes:routes,
  routes,
  // 每次路由跳转  滚动条回到最顶部
  scrollBehavior() {
    return { y: 0 };
  },
});
// 路由守卫
router.beforeEach(async (to, from, next) => {
  // to是获取去哪个路由信息
  // from是获取从那个组件过来的
  // next是去放行  next()
  // next();
  let token = localStorage.getItem("TOKEN");
  let name = store.state.user.userInfo.name;
  if (token) {
    // 用户已经登录则不能去
    if (to.path == "/login" || to.path == "/register") {
      next("/home");
    } else {
      if (name) {
        next();
      } else {
        try {
          await store.dispatch("user/userInfo");
          next();
        } catch (error) {
          alert("身份信息过期,请重新登录！");
          localStorage.removeItem("TOKEN");
          next("/login");
        }
      }
    }
  }
  // 未登录
  else {
    let topath = to.path;
    if (to.meta.isAuth) {
      next("/login?redirect="+topath);
    }
    else next();
  }
});

export default router;
