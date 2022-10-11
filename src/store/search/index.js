import {
    reqGetSearchInfo
} from "@/api";
const state = {
    searchList: {}
};
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList;
    }
};
const actions = {
    async getSearchList({
        commit
    }, params = {}) {
        let result = await reqGetSearchInfo(params);
        if (result.code == 200) {
            commit('GETSEARCHLIST', result.data)
        }
    }
};
//简化仓库的数据
const getters = {
    goodsList(state) {
        //或个空数组是防止网络不好的时候访问不到数据，然后后面操作遍历的时候遍历的是undefined
        //给个空数组可以让遍历的数据为数组
        return state.searchList.goodsList || [];
    },
    trademarkList(state) {
        return state.searchList.trademarkList || [];
    },
    attrsList(state) {
        return state.searchList.attrsList || [];
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}