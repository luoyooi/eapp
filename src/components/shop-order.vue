<template>
    <div id="shop_order">
      <!--左边菜品种类-->
      <ul class="food-type">
        <li v-for="(item, index) in currentStore.food"
            :key="item.id" @click="changeType(item, index)"
            :class="{be_click : currentIndex == index }"
        >
          {{item.type}}
        </li>
      </ul>
      <!--右边菜品-->
      <div class="food">
        <h4>{{currentType.type}}</h4>
        <div class="desc" v-for="food in currentType.foodList">
          <img :src="food.img" alt="图片">
          <div>
            <p>{{food.name}}</p>
            <p>{{food.desc}}</p>
            <p>月售{{food.month_sale}} 赞{{food.praise}}</p>
            <div>
              <span>￥{{food.price}}</span>
              <p>
                <el-button @click="addFood(food)" type="primary" size="mini" icon="el-icon-plus" circle></el-button>
                <el-button @click="subFood(food)" type="primary" size="mini" icon="el-icon-minus" circle></el-button>
              </p>
            </div>
          </div>
        </div>
        <!--购物车汇总-->
        <div class="order_total">
          <span>{{alreadyOrder.length}}道菜，共{{totalPrice}}元</span>
          <i class="el-icon-shopping-cart-full"></i>
        </div>
      </div>
    </div>
</template>

<script>
  import food1 from '../../public/static/img/huajia1.webp'
  export default {
    // 当前商家id
    props: ['store_id'],
    name: 'shop-order',
    data () {
      return {
        currentStore: {},// 当前商店
        currentType: {}, // 当前类型
        totalPrice: 0, // 总价
        alreadyOrder: [], // 已点订单列表
        currentIndex: 0,// 默认选中第一个
        liClicks: true, // 是否添加被点击类
        foodData: ''
      }
    },
    methods: {
      changeType (item, index) {
        // 改变li的样式
        this.currentIndex = index;

        // 改变右侧显示的数据
        this.currentType = item;
      },
      addFood(food){
        // 加入菜单
        this.alreadyOrder.push(food);

        // 计算总价
        this.totalPrice = Math.floor((this.totalPrice + food.price) * 100) / 100;

        // 更新订单数据
        this.saveOrder ();
      },
      subFood(food){
        // 移除订单
       let index = -1;
       for (let i=0; i<this.alreadyOrder.length; i++)
       {
         if (this.alreadyOrder[i].food_id === food.food_id)
           index = i;
       }

       if (index >= 0)
       {
         this.alreadyOrder.splice(index, 1);
         // 计算总价
         this.totalPrice = Math.floor((this.totalPrice - food.price) * 100) / 100;

         if (this.totalPrice < 0)
           this.totalPrice = 0;
         // 更新订单数据
         this.saveOrder ();
       }
      },
      // 保存订单信息
      saveOrder () {
        let obj = {
          'orders': this.alreadyOrder,
          'totalPrice': this.totalPrice
        }
        let str = JSON.stringify(obj)
        window.sessionStorage.setItem('ordersInfo', str);
      }
    },
    mounted () {
      // 获取所有食品数据
      this.$http.get('/static/json/shop.json').then(res=>{
        this.foodData = res.data;

        // 根据当前商家id,获取当前商家对应的数据
        for (let i=0; i< this.foodData.length; i++)
        {
          if (this.foodData[i].store_id === this.store_id)
          {
            this.currentStore = this.foodData[i];
            //默认选中第一个
            this.currentType = this.currentStore.food[0];
          }
        }

      })

      // 加载本地数据
      let str = window.sessionStorage.getItem('ordersInfo');
      let obj = JSON.parse(str);
      if (obj)
      {
        this.alreadyOrder = obj.orders;
        this.totalPrice = obj.totalPrice;
      }
    }
  }
</script>

<style lang="less" scoped>
  @baseFont: 50;
  #shop_order{
    display: flex;
    height: 10.8rem;
    flex-flow: row nowrap;
    margin-top: 5px;
    /*食品种类*/
    .food-type{
      background-color: #f5f5f5;
      flex: 2;
      height: 100%;
      overflow-y: auto;
      border-right: 1px dotted #ccc;
      li{
        font-size: 13rem * 1.5 / @baseFont;
        padding: 9rem * 1.5 / @baseFont 10rem * 1.5 / @baseFont 22rem * 1.5 / @baseFont;
      }
    }

    /*食品*/
    .food{
      height: 100%;
      overflow-y: auto;
      background-color: #fff;
      flex: 8;
    }
  }
  /*被点击的li*/
  .be_click{
    background-color: #fff;
  }

  .food{
    position: relative;
    h4{
      font-size: 12rem * 1.5 / @baseFont;
      margin-bottom: 10px;
    }
    .desc{
      display: flex;
      flex-flow: row nowrap;
      margin: 5px 0;
      img{
        width: 75rem * 1.5 / @baseFont;
        height: 56rem * 1.5 / @baseFont;
      }
      div{
        padding-left: 10px;
        width: 90%;
        p:nth-of-type(1){
          font-size: 15rem * 1.5 / @baseFont;
        }
        p:nth-of-type(2){
          font-size: 10rem * 1.5 / @baseFont;
        }
        p:nth-of-type(3){
          font-size: 10rem * 1.5 / @baseFont;
        }
        div{
          font-size: 16rem * 1.5 / @baseFont;
          line-height: 32rem * 1.5 / @baseFont;
          color: #fb4e44;
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
    .order_total{
      position: fixed;
      bottom: 50px;
      right: 10px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      span{
        background-color: #40bad5;
        padding: 0 10px;
        position: relative;
        left: 5px;
        font-size: 15rem * 1.5 / @baseFont;
        color: #fff;
      }
      i{
        z-index: 1000;
        padding: 6px;
        border-radius: 50%;
        font-size: 30rem * 1.5 / @baseFont;
        background-color: #035aa6;
        color: #fff;
      }
    }
  }
</style>
