<template>
    <ul id="shop-detail">
      <li>
        <i class="el-icon-location-outline"></i>
        <span>杭州经济技术开发区</span>
        <i class="el-icon-phone"></i>
      </li>
      <li>
        <i class="el-icon-collection-tag"></i>
        <span>查看食品安全档案</span>
        <i class="el-icon-arrow-right"></i>
      </li>
      <li>
        <i class="el-icon-alarm-clock"></i>
        <span>配送时间: 09:30-21:30</span>
      </li>
      <li>
        <i class="el-icon-folder-checked"></i>
        <span>商家服务</span>
      </li>
    </ul>
</template>

<script>
  export default {
    name: 'shop-detail'
  }
</script>

<style lang="less" scoped>
  @baseFont: 50;
  #shop-detail{
    display: flex;
    flex-flow: column nowrap;
    background-color: #fff;
    padding: 10px 5px;
    li{
      width: 100%;
      padding: 10px 0;
      font-size: 14rem * 1.5 / @baseFont;
      line-height: 28rem * 1.5 / @baseFont;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      span{
        padding-left: 10px;
      }
      i:nth-of-type(2){
        position: absolute;
        right: 8px;
      }
    }
  }
</style>
