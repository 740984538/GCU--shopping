<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default{
  name:'',
  components:{
    Header,
    Footer,
  },
  mounted(){
    //通知vuex发送请求，获取商品分类三级列表数据
    //放在这个文件里是为了优化性能，防止多次请求数据
    this.$store.dispatch("categoryList");
  }
}
</script>

<style scoped>

</style>
