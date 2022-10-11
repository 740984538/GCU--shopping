import Vue from 'vue'
import App from '@/App.vue'
//全局组件
import TypeNav from '@/components/TypeNav';
import Carousel from '@/components/Carousel';
import Pagination from '@/components/Pagination';
Vue.component(TypeNav.name,TypeNav);
Vue.component(Carousel.name,Carousel);
Vue.component(Pagination.name,Pagination);
//引入路由
import router from '@/router';
//引入仓库
import store from '@/store';
//引入mock模拟数据
import '@/mock/mockServe';

//引入表单校验插件vee-validate
import VeeValidate from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN';
Vue.use(VeeValidate)

//表单验证
VeeValidate.Validator.localize("zh_CN", {
  messages: {
    ...zh_CN.messages,
    is: (field) => `${field}必须与密码相同`, // 修改内置规则的 message，让确认密码和密码相同
  },
  attributes: {
    phone: "手机号",
    code: "验证码",
    password: "密码",
    password_re: "确认密码",
    agree:'协议'
  },
});


Vue.config.productionTip = false

new Vue({
  //这个就是创建一个vue对象，然后挂载到指定的页面节点。
  render: h => h(App),
  //全局事件总线$bus配置
  beforeCreate(){
    Vue.prototype.$bus = this;
    //创建bus实例
  },
  router,
  store
}).$mount('#app')
