<template>
  <div class="nav">
    <ul>
      <li v-for="item in list" :key="item.id">
        <a href="#">{{item.desc}}</a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'main-nav',
  data () {
    return {
      list: [
        { id: 1, desc: '天天美食' },
        { id: 2, desc: '乐享超市' },
        { id: 3, desc: '生鲜果蔬' },
        { id: 4, desc: '跑腿专送' },
        { id: 5, desc: '午餐优选' },
        { id: 6, desc: '甜点饮品' },
        { id: 7, desc: '小吃馆' },
        { id: 8, desc: '家常菜' },
        { id: 9, desc: '鲜花蛋糕' },
        { id: 10, desc: '品牌连锁' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@baseFont: 50;
.nav{
  width: 100%;
  background-color: #fff;
  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-flow: row wrap;

    li {
      list-style: none;
      width: 20%;
      height: 100rem / @baseFont;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: flex-end;

      a {
        text-decoration: none;
        font-size: 15rem / @baseFont;
        color: #757575;

        &::before {
          content: "";
          display: block;
          width: 55rem / @baseFont;
          height: 55rem / @baseFont;
          background-size: 55rem / @baseFont 55rem / @baseFont;
          background-repeat: no-repeat;
        }
      }
    }

    //循环生成li下a背景图
    .backgroundCard(@index) when (@index <= 10) {
      li:nth-of-type(@{index}) a::before {
        background-image: url("../assets/img/elm@{index}.png");
      }
      .backgroundCard(@index + 1)
    }
    .backgroundCard(1);

  }
}
</style>
