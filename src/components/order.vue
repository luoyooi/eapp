<template>
    <div id="order">
      <header>
        <i @click="back" class="el-icon-arrow-left"></i>
        <span>订单详情</span>
        <i></i>
      </header>
      <mt-cell title="新增收货地址">
        <i slot="icon" class="el-icon-add-location"></i>
        <i class="el-icon-arrow-right"></i>
      </mt-cell>
      <mt-cell title="立即送出">
        <i slot="icon" class="el-icon-timer"></i>
        <i class="el-icon-arrow-right"></i>
      </mt-cell>
      <!--已点菜单-->
      <div class="orders">
        <h4>外卖清单</h4>
        <div class="orders-list">
          <mt-cell v-for="food in orders" :title="food.name">
            <i slot="icon" class="el-icon-tableware"></i>
            <div class="op_order">
              <span>{{food.price}}</span>
              <i class="el-icon-delete-solid" @click="delOrder(food)"></i>
            </div>
          </mt-cell>
        </div>
      </div>
      <!--支付方式-->
      <mt-cell title="支付方式">
        <span>在线支付</span>
      </mt-cell>
      <!--汇总结算-->
      <div class="Settlement">
        <span>合计{{totalPrice}}元</span>
        <mt-button type="primary">提交订单</mt-button>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'order',
    data () {
      return {
        orders: [],
        totalPrice: 0
      }
    },
    methods: {
      // 保存订单信息
      saveOrder () {
        let obj = {
          'orders': this.orders,
          'totalPrice': this.totalPrice
        }
        let str = JSON.stringify(obj)
        window.sessionStorage.setItem('ordersInfo', str);
      },
      // 删除订单
      delOrder (food) {
        let index = -1;
        for (let i=0; i<this.orders.length; i++)
        {
          if (food.food_id == this.orders[i].food_id)
          {
            index = i;
            break;
          }
        }

        if (index >= 0)
        {
          this.orders.splice(index, 1);
          // 计算总价
          this.totalPrice = Math.floor((this.totalPrice - food.price) * 100) / 100;

          if (this.totalPrice < 0)
            this.totalPrice = 0;
          // 更新订单数据
          this.saveOrder ();
        }
      },
      back () {
        this.$router.go(-1);
      }
    },
    mounted () {
      let str = window.sessionStorage.getItem('ordersInfo');
      let obj = JSON.parse(str);
      if (obj)
      {
        this.orders = obj.orders;
        this.totalPrice = obj.totalPrice;
      }
    }
  }
</script>

<style lang="less" scoped>
  @baseFont: 50;
  header{
    border-top: 6px solid #035aa6;
    background-color: #fff;
    border-radius: 0 0 10px 10px;
    margin-bottom: 5px;
    font-size: 16rem * 1.5 / @baseFont;
    line-height: 32rem * 1.5 / @baseFont;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    span{
      flex: 8;
      text-align: center;
    }
    i{
      flex: 2;
      padding-left: 10px;
    }
  }

  .orders{
    h4{
      font-size: 14rem * 1.5 / @baseFont;
      padding-left: 8rem * 1.5 / @baseFont;
      background-color: #6a8caf;
      color: #fff;
    }
    .orders-list{
      max-height: 300px;
      overflow-y: auto;
    }
  }

  .op_order{
    span{
      padding-right: 10rem * 1.5 / @baseFont;
    }
    i{
      color: #fd5e53;
    }
  }

  .Settlement{
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 8px 5px;
    background-color: #fff;
    border-top: 1px solid #eee;
    span{
      font-size: 16rem * 1.5 / @baseFont;
      margin-right: 8px;
      color: #c70039;
    }
  }
</style>
