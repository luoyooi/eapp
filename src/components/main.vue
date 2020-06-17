<template>
    <div>
        <!--搜索框-->
        <Search></Search>
        <!--轮播图-->
        <mt-swipe class="swipe" :auto="4000">
          <mt-swipe-item class="swipe-item" v-for="item in list">
            <img :src="item.img" :alt="item.desc">
          </mt-swipe-item>
        </mt-swipe>
        <!--导航栏-->
        <MainNav></MainNav>
        <!--美食推荐-->
        <ul class="foods" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <li v-for="item in stores" @click="toShop(item)">
              <img :src="item.img" :alt="item.desc">
              <div class="food-content">
                <h4>{{item.title}}</h4>
                <div class="line2">
                  <div>
                    <span>
                      <i class="el-icon-star-on"></i>
                      <i class="el-icon-star-on"></i>
                      <i class="el-icon-star-on"></i>
                      <i class="el-icon-star-on"></i>
                      <i class="el-icon-star-on"></i>
                    </span>
                    <span>{{item.score}}</span>
                    <span>月售{{item.sale}}</span>
                  </div>
                  <div>
                    <span>{{item.time}}</span>
                    <span>{{item.distance}}</span>
                  </div>
                </div>
                <div class="line3">
                  <span>起送￥{{item.starting_send}}</span>
                  <span>配送￥{{item.distribution}}</span>
                </div>
                <div class="line4">
                  <span>{{item.full_decrement}}</span>
                </div>
              </div>
            </li>
            <mt-spinner class="spinner" color="#26a2ff" type="triple-bounce"></mt-spinner>
        </ul>
    </div>
</template>

<script>
import Search from './main-search'
import MainNav from './main-nav'

export default {
  data () {
    return {
      list: '',
      loading: false,
      stores: ''
    }
  },
  methods: {
    loadMore () {
      this.loading = true;

      // 显示加载动画
      this.showSpinner = true;

      // 加载
      setTimeout(() => {
        this.stores.forEach(item=>{
          this.stores.push(item);
        })
        this.loading = false;
        // 关闭加载动画
        this.showSpinner = false;
      }, 2500);
    },
    toShop (item) {
      // 保存商店信息
      let str = JSON.stringify(item);
      window.sessionStorage.setItem('shop', str);
      // 跳转到商店详情页
      this.$router.push({name: 'shop'});
    }
  },
  components: {
    Search,
    MainNav
  },
  mounted () {
    this.$http.get('/static/json/main.json').then(res=>{
      this.stores = res.data.stores;
      this.list = res.data.banner_list;
    })
  }
}
</script>

<style lang="less" scoped>
  @baseFont: 50;
  .swipe{
    height: 200rem / @baseFont;
    font-size: 18rem / @baseFont;
    padding: 8px 5px;
    border-radius: 5px;
    background-color: #fff;
    img{
      width: 100%;
      border-radius: 5px;
    }
  }

  .foods{
    margin: 5rem / @baseFont 0 50rem / @baseFont;
    background-color: #fff;
    border-top: 1px solid #ccc;
    height: 6.6rem;
    overflow: auto;
    li{
      box-sizing: border-box;
      padding: 3px 10px;
      margin: 10px 0;
      display: flex;
      flex-flow: row nowrap;
      img{
        width: 76rem * 1.5 / @baseFont;
        height: 57rem * 1.5 / @baseFont;
      }
      .food-content{
        padding-left: 10px;
        width: 100%;
        h4{
          font-size: 24rem / @baseFont;
        }
        div[class^="line"]{
          margin: 2.5px 0;
          font-size: 16rem / @baseFont;
        }

        /*第二行*/
        .line2{
          width: 100%;
          display: flex;
          flex-flow: row nowrap;
          /*五角星，评分，月售*/
          div:nth-of-type(1){
            flex: 8;
            display: flex;
            flex-flow: row nowrap;
            span{
              margin-right: 10px;
            }
            /*五角星*/
            span:nth-of-type(1){
              color: #f1ee18;
            }

          }
          /*送达时间，距离*/
          div:nth-of-type(2){
            flex: 4;
            display: flex;
            justify-content: flex-end;
            span{
              margin-left: 10rem / @baseFont;
            }
          }
        }

        /*第三行*/
        .line3{
          span{
            margin-right: 10rem / @baseFont;
          }
        }

        /*第四行*/
        .line4{
          display: flex;
          &:before{
            content: "";
            display: block;
            padding-right: 5px;
            width: 15rem * 1.5 / @baseFont;
            height: 15rem * 1.5 / @baseFont;
            background-size: 15rem * 1.5 / @baseFont 15 * 1.5rem / @baseFont;
            background-repeat: no-repeat;
            background-image: url("../assets/img/manjian.webp");
          }
        }
      }
    }
  }

  .spinner{
    text-align: center;
  }

</style>
