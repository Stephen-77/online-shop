// 当前的模块：API进行统一管理
import requests from "./request";
import mockRequests from "./mockAjax";
// 三级联动
// /api/product/getBaseCategoryList  get请求无参数

export const reqCategoryList = () =>
  requests({ url: "/product/getBaseCategoryList", method: "GET" });

// 获取floor数据
export const reqGetBannerList = () => mockRequests({ url: "/banner" });
export const reqGetFloorList = () => mockRequests({ url: "/floor" });
// 获取 搜索商品数据 地址api/list/   当前的参数必须带一个参数  即使是空对象
export const reqGetSearchInfo = (params) =>
  requests({ url: "/list", method: "POST", data: params });
// 获取产品信息 /api/item/{ skuId }
export const reqGoodsIfo = (skuId) =>
  requests({ url: `/item/${skuId}`, method: "get" });

// 将产品添加到购物车中
export const reqAddOrUpdateShopCart = (skuId, skuNum) =>
  requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" });
//购物车 /api/cart/cartList  请求方式GET

export const reqCartList = () =>
  requests({ url: `/cart/cartList`, method: "get" });
// 删除购物车产品 /api/cart/deleteCart/{skuId}
export const reqDeleteCartById = (skuId) =>
  requests({ url: `/cart/deleteCart/${skuId}`, method: "delete" });
// /api/cart/checkCart/{skuID}/{isChecked} 修改商品状态
export const reqCartIsChecked = (skuId, isChecked) =>
  requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: "get" });

  // 注册用户时获取验证码的地址 /api/user/passport/sendCode/{phone}
  export const reqGetCode = (phone) =>
  requests({ url: `/user/passport/sendCode/${phone}`, method: "get" });
// /api/user/passport/register 注册用户
export const reqUserRegister = (data) =>
requests({ url: `/user/passport/register`, method: "POST",data });

//  /api/user/passport/login 请求方式POST
export const reqUserLogin = (data) =>
requests({ url: `/user/passport/login`, method: "POST",data });
//  token校验获取用户登录信息，用户登录只保存用户的token
// token校验
// http://182.92.128.115/api/user/passport/auth/getUserInfo
export const reqUserInfo = () =>
requests({ url: `/user/passport/auth/getUserInfo`, method: "get" });

// /api/user/passport/logout  退出登录
export const reqLoginOut = () =>
requests({ url: `/user/passport/logout `, method: "get" });

// /api/user/userAddress/auth/findUserAddressList 获取用户地址信息get
export const reqAddressInfo = () =>
requests({ url: `/user/userAddress/auth/findUserAddressList`, method: "get" });

// /api/order/auth/trade请求方式GET 获取商品清单
export const reqOrderInfo= () =>
requests({ url: `/order/auth/trade`, method: "get" });

// /api/order/auth/submitOrder?tradeNo={tradeNo}  请求方式POST 提交订单

export const reqSubmitOrder= (tradeNo,data) =>
requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, method: "POST",data:data });

// /api/payment/weixin/createNative/{orderId} 请求方式GET 获取订单支付信息
export const reqPayInfo= (orderId) =>
requests({ url: `/payment/weixin/createNative/${orderId}`, method: "get" });


// 支付状态查询/api/payment/weixin/queryPayStatus/{orderId} 请求方式GET
export const reqPayStatus= (orderId) =>
requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: "get" });

// 我的订单列表  api/order/auth/{page}/{limit} 请求方式GET
export const reqMyOrder= (page,limit) =>
requests({ url: `/order/auth/${page}/${limit}`, method: "get" });
