//进行api统一管理
import requests from "./request";
import mockRequest from './mockAjax';
//三级联动的接口
//地址  /api/product/getBaseCategoryList   get请求模式
export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'GET'});
//发送请求   请求返回的结果是promise对象


export const reqGetBannerList = ()=>mockRequest({url:'/banner',method:'GET'});
export const reqFloorList = ()=>mockRequest({url:'/floor',method:'GET'});
export const reqGetSearchInfo = (params)=>requests({url:'/list',method:'POST',data:params});
export const reqGoodsInfo = (skuid)=>requests({url:`/item/${skuid}`,method:'GET'});
export const reqGetCode = (phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'GET'});
export const reqUserRegister = (data)=>requests({url:'/user/passport/register',data,method:'POST'});
export const reqLogin = (data)=>requests({url:'/user/passport/login',data,method:'POST'});
export const reqUserInfo = ()=>requests({url:'/user/passport/auth/getUserInfo',method:'GET'});
export const reqLogout = ()=>requests({url:'/user/passport/logout',method:'GET'})

