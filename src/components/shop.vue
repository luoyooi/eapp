<template>
  <div id="shop">
    <header>
      <i class="el-icon-arrow-left" @click="toMain"></i>
      <div>
        <img :src="shopInfo? shopInfo.img: ''" :alt="shopInfo? shopInfo.desc: ''">
        <h4>{{shopInfo? shopInfo.title : ''}}</h4>
        <p>配送约{{shopInfo ? shopInfo.time : ''}}</p>
        <span>{{shopInfo? shopInfo.full_decrement : ''}}</span>
      </div>
    </header>
    <mt-navbar class="shop-details" v-model="selected">
      <mt-tab-item id="shopOrder">点菜</mt-tab-item>
      <mt-tab-item id="shopEvaluate">评价</mt-tab-item>
      <mt-tab-item id="shopDetail">商家</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected" :swipeable="true">
      <mt-tab-container-item id="shopOrder">
        <ShopOrder :store_id="shopInfo ? shopInfo.store_id: ''"></ShopOrder>
      </mt-tab-container-item>
      <mt-tab-container-item id="shopEvaluate">
        <ShopEvaluate></ShopEvaluate>
      </mt-tab-container-item>
      <mt-tab-container-item id="shopDetail">
        <ShopDetail></ShopDetail>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  import ShopOrder from './shop-order'
  import ShopEvaluate from './shop-evaluate'
  import ShopDetail from './shop-detail'
  export default {
    name: 'shop',
    data () {
      return {
        shopInfo: {},
        selected: 'shopOrder'
      }
    },
    components: {
      ShopOrder,
      ShopEvaluate,
      ShopDetail
    },
    methods: {
      toMain () {
        this.$router.go(-1);
      }
    },
    mounted () {
      let str = window.sessionStorage.getItem('shop');
      this.shopInfo = JSON.parse(str);
    }
  }
</script>

<style lang="less" scoped>
  @baseFont: 50;
  header{
    background-color: rgb(46, 47, 59);
    padding: 0 8rem * 2 / @baseFont;
    position: relative;
    i{
      position: absolute;
      top: 10rem * 2 / @baseFont;
      font-size: 15rem * 2 / @baseFont;
      color: #fff;
    }
    div{
      padding: 3rem * 2 / @baseFont;
      box-sizing: border-box;
      transform: translateY(45%);
      border-radius: 6rem * 2 / @baseFont;
      background-color: #fff;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      img{
        float: right;
        transform: translate(-20%, -60%);
        width: 33rem * 2 / @baseFont;
        border-radius: 4rem * 2 / @baseFont;
      }
      h4{
        font-size: 14rem * 2 / @baseFont;
      }
      p{
        font-size: 8rem * 2 / @baseFont;
        color: #666;
      }
      span{
        font-size: 8rem * 2 / @baseFont;
        color: #f55313;
      }
    }
  }
  .shop-details{
    padding-top: 40rem * 2 / @baseFont;
  }
</style>
