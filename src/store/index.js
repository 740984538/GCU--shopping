import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);
import home from './home';
import search from "./search";
import detail from "./detail";
import user from './user';


//暴露一个store类的实例
export default new Vuex.Store({
    //vuex仓库模块化存储数据
    modules:{
        home,
        search,
        detail,
        user
    }
});