import {
    reqGetCode,
    reqUserRegister,
    reqLogin,
    reqUserInfo,
    reqLogout
} from "@/api";
import {
    setToken,
    getToken,
    removeToken
} from "@/utils/token";
import {
    Promise
} from "core-js";
//登录与注册的仓库
const state = {
    code: "",
    token: getToken(),
    userInfo: {}
};
const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    //清除本地数据
    CLEAR(state) {
        //帮仓库中先关用户信息清空
        state.token = '';
        state.userInfo = {};
        //本地存储数据清空
        removeToken();
    }
};
const actions = {
    //获取验证码
    async getCode({
        commit
    }, phone) {
        let result = await reqGetCode(phone);
        if (result.code == 200) {
            commit('GETCODE', result.data);
        }
    },
    //用户注册
    async userRegister({
        commit
    }, data) {
        let result = await reqUserRegister(data);
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    //登录
    async userLogin({
        commit
    }, data) {
        let result = await reqLogin(data);
        if (result.code == 200) {
            commit('USERLOGIN', result.data.token);
            //持久化存储token
            setToken(result.data.token);
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    //获取用户信息
    async getUserInfo({
        commit
    }) {
        let result = await reqUserInfo();
        if (result.code == 200) {
            commit('GETUSERINFO', result.data);
        }
    },
    //退出登录
    async userLogout({commit}){
        let result = await reqLogout();
        if(result.code==200){
            commit('CLEAR');
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'));
        }
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}