import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess/AddCartSuccess";
import ShopCart from "@/pages/ShopCart/ShopCart";
import Trade from "@/pages/Trade/Trade";
import Pay from "@/pages/Pay/Pay";
import PaySuccess from "@/pages/PaySuccess/PaySuccess";
import Center from "@/pages/Center/Center";

import MyOrder from "@/pages/Center/myOrder/my-order";
import GroupOrder from "@/pages/Center/groupOrder/group-order";
// 路由懒加载
const foo=()=>{
  return import('@/pages/Home')
}
export default [
  {
    name: "home",
    path: "/home",
    component: foo,
    meta: { isFooter: true },
  },
  {
    name: "search",
    path: "/search/:keyword?",
    // 路由懒加载  简写方式
    component: ()=>import('@/pages/Search'),
    meta: { isFooter: true },
  },
  {
    name: "login",
    path: "/login",
    component: Login,
  },
  {
    name: "register",
    path: "/register",
    component: Register,
  },
  {
    name: "detail",
    path: "/detail/:skuid",
    component: Detail,
  },
  {
    name: "addcartsuccess",
    path: "/addcartsuccess",
    component: AddCartSuccess,
  },
  {
    name: "shopcart",
    path: "/shopcart",
    component: ShopCart,
  },
  {
    name: "trade",
    path: "/trade",
    component: Trade,
    meta: { isAuth: true },
    beforeEnter: (to, from, next) => {
      if (from.path == "/shopcart") {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    name: "pay",
    path: "/pay",
    component: Pay,
    meta: { isAuth: true },
    beforeEnter: (to, from, next) => {
      if (from.path == "/trade") {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    name: "paysuccess",
    path: "/paysuccess",
    component: PaySuccess,
    meta: { isAuth: true },
    beforeEnter: (to, from, next) => {
      if (from.path == "/pay") {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    name: "center",
    path: "/center",
    component: Center,
    children: [
      {
        path: "myorder",
        component: MyOrder,
        meta: { isAuth: true },
      },
      {
        path: "grouporder",
        component: GroupOrder,
      },
      {
        path: "/center",
        redirect: "/center/myorder",
      },
    ],
  },
  // 重定向，在项目跑起来都时候，立马定向到首页
  {
    path: "*",
    redirect: "/home",
  },
];
