<template>
    <div>
      <header>
        <div>
          <img src="../assets/img/user.jpg" alt="头像">
        </div>
        <span>小了吧</span>
      </header>
      <mt-cell title="红包领取">
        <i slot="icon" class="el-icon-mobile"></i>
        <i class="el-icon-arrow-right"></i>
      </mt-cell>
      <mt-cell title="收货地址">
        <i slot="icon" class="el-icon-location-outline"></i>
        <i class="el-icon-arrow-right"></i>
      </mt-cell>
      <mt-cell title="常见问题">
        <i slot="icon" class="el-icon-question"></i>
        <i class="el-icon-arrow-right"></i>
      </mt-cell>
      <mt-cell title="协议与说明">
        <i slot="icon" class="el-icon-tickets"></i>
        <i class="el-icon-arrow-right"></i>
      </mt-cell>
      <mt-cell title="退出登录">
        <i slot="icon" class="el-icon-switch-button"></i>
        <i class="el-icon-arrow-right"></i>
      </mt-cell>
    </div>
</template>

<script>
  export default {
    name: 'personal',

  }
</script>

<style lang="less" scoped>
  @baseFont: 50;
  header{
    background-color: #005082;
    height: 200px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    div{
      width: 100px;
      border-radius: 50%;
      img{
        width: 100%;
        border-radius: 50%;
      }
    }
    span{
      font-size: 16rem * 1.5 / @baseFont;
      color: #fff;
    }
  }
</style>
