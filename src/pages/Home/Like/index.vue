<template>
  <div class="like">
    <div class="py-container">
      <div class="title">
        <h3 class="fl">猜你喜欢</h3>
        <a href="javascript:;" class="fr tip changeBnt">换一换</a>
      </div>
      <div class="bd">
        <ul class="favourate">
          <li v-for="(good, index) in goodsList" :key="good.id" v-show="index < 6">
            <router-link :to="`/detail/${good.id}`">
                <img :src="good.defaultImg" />
            </router-link>
            <div class="like-text">
              <p>{{ good.title }}</p>
              <h3>¥{{ good.price }}.00</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name:'',
    methods:{
      getData() {
      this.$store.dispatch("getSearchList", this.searchParams);
    },
    },
    computed:{
      ...mapGetters(["goodsList"])
    },
    mounted(){
      this.getData();
      console.log(this.goodsList)
    }
};
</script>

<style scoped lang="less">
.like {
  margin-top: 15px;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .title {
      overflow: hidden;

      .fl {
        float: left;
        font-size: 20px;
        line-height: 30px;
      }

      .fr {
        float: right;
        background-image: url(./images/icons.png);
        width: 66px;
        height: 25px;
        background-position: 182px -104px;
        line-height: 30px;
        font-size: 12px;
        font-weight: 400;
        color: #666;
        text-decoration: none;
      }
    }

    .bd {
      .favourate {
        border: 1px solid #e4e4e4;
        overflow: hidden;
        padding: 0 10px;
        box-sizing: border-box;
        display: flex;

        li {
          height: 290px;
          margin: 0 -1px;
          overflow: hidden;
          background: #fff;
          position: relative;
          width: 16.667%;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;

          img {
            width: 142px;
            height: 150px;
            transition: all 400ms;

            &:hover {
              opacity: 0.8;
              //opacity属性指定了一个元素后面的背景的被覆盖程度  0为完全透明
              transform: scale(1.1);
              //将大小缩放到原来的1.1倍
            }
          }

          .like-text {
            padding: 0;
            width: 142px;
            border-right: 1px solid #e4e4e4;

            p {
             margin: 5px 0;
            }

            h3 {
              color: #df3033;
              font-size: 20px;
              line-height: 30px;
              margin: 9px 0;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style>