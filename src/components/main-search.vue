<template>
  <div id="search">
    <el-input placeholder="请输入内容" v-model="input" clearable>
    </el-input>
    <el-button id="search-btn" icon="el-icon-search" circle></el-button>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      input: ''
    }
  }
}
</script>

<style lang="less" scoped>
#search{
  padding: 6px 5px;
  background-color: #035aa6;
  box-sizing: border-box;
  display: flex;
}

#search-btn{
  margin: 0 3px;
}
</style>
