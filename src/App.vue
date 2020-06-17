<template>
  <div id="app">
    <div id="top">
      <router-view></router-view>
    </div>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="main">
        <div class="select-item">
          <i class="el-icon-s-home"></i>
          <span>主页</span>
        </div>
      </mt-tab-item>
      <mt-tab-item id="order">
        <div class="select-item">
          <i class="el-icon-s-shop"></i>
          <span>订单</span>
        </div>
      </mt-tab-item>
      <mt-tab-item id="personal">
        <div class="select-item">
          <i class="el-icon-s-custom"></i>
          <span>我的</span>
        </div>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      selected: 'main'
    }
  },
  watch: {
    selected (val) {
      this.$router.push({ name: this.selected })
    }
  }
}
</script>

<style lang="less" scoped>
  .select-item{
    display: flex;
    flex-flow: column nowrap;
    i{
      font-size: 20px;
    }
  }
</style>
