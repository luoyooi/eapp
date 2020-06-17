<template>
    <div>
      <div class="score-detail">
        <div class="part1">
          <span>4.9</span>
          <span>商家评分</span>
        </div>
        <div class="part2">
          <div>
            <span>口味</span>
            <span>
              <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
            </span>
            <span>4.9</span>
          </div>
          <div>
            <span>包装</span>
            <span>
              <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
            </span>
            <span>4.9</span>
          </div>
        </div>
        <div class="part3">
          <span>5</span>
          <span>配送评分</span>
        </div>
      </div>
      <div class="comment-head">
        <span
          v-for="(item, index) in data"
          :class="{be_click: item.isClick}"
          @click="change(index)"
        >
          {{item.text}}
        </span>
      </div>
      <div class="comments-container">
        <div class="comments-list" v-for="i in 3">
          <div>
            <p>匿名用户<span>2020-06-07</span></p>
            <p>41分钟送达</p>
            <p>#香辣鸡排#鸡排挺好的，就是粉撒得少了点哈</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'shop-evaluate',
    data () {
      return {
        data: [
          { isClick: true, text: '全部(132)'},
          { isClick: false, text: '好评(128)'},
          { isClick: false, text: '差评(2)'},
          { isClick: false, text: '有图评价(13)'},
          { isClick: false, text: '味道赞(10)'},
        ]
      }
    },
    methods: {
      change (index) {
        this.data.forEach(item=>{
          item.isClick = false;
        });
        this.data[index].isClick = true;
      }
    }
  }
</script>

<style lang="less" scoped>
  @baseFont: 50;
  /*评分*/
  .score-detail{
    padding: 10rem * 1.5 / @baseFont 0;
    margin-top: 5px;
    background-color: #fff;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-bottom: 1px solid #ccc;
    .part1{
      flex: 2;
      display: flex;
      flex-flow: column nowrap;
      span:nth-of-type(1){
        font-size: 24rem * 1.5 / @baseFont;
        color: #FFB000;
      }
      span:nth-of-type(2){
        font-size: 10rem * 1.5 / @baseFont;
        color: #999;
      }
    }

    .part2{
      flex: 4;
      display: flex;
      flex-flow: column nowrap;
      font-size: 11rem * 1.5 / @baseFont;
      div{
        span{
          &:nth-of-type(n+2){
            color: #FFB000;
            padding-left: 10rem * 1.5 / @baseFont;
          }
        }
      }
    }

    .part3{
      flex: 2;
      display: flex;
      flex-flow: column nowrap;
      color: #999;
      span:nth-of-type(1){
        font-size: 24rem * 1.5 / @baseFont;
      }
      span:nth-of-type(2){
        font-size: 10rem * 1.5 / @baseFont;
      }

    }
  }
  /*评论种类*/
  .comment-head{
    font-size: 12rem * 1.5 / @baseFont;
    background-color: #fff;
    padding: 15rem * 1.5 / @baseFont 14rem * 1.5 / @baseFont 5rem * 1.5 / @baseFont;
    display: flex;
    flex-flow: row wrap;
    span{
      display: block;
      margin: 5px 5px;
      border: 1px solid #ccc;
      border-radius: 26px;
      padding: 3px 8px;
      color: #666666;
    }
    .be_click{
      background-color: #fff;
      color: #FFB000;
      border-color: #FFB000;
    }
  }
  /*评论列表*/
  .comments-container{
    height: 5.7rem;
    overflow: auto;
  }
  .comments-list{
    background-color: #fff;
    display: flex;
    flex-flow: row nowrap;
    margin: 5px 0;
    div{
      p{
        margin: 5px 0;
      }
      p:nth-of-type(1){
        font-size: 16rem * 1.5 / @baseFont;
        color: #2f2f2f;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        span{
          font-size: 12rem * 1.5 / @baseFont;
        }
      }
      p:nth-of-type(2){
        font-size: 12rem * 1.5 / @baseFont;
      }
      p:nth-of-type(3){
        font-size: 14rem * 1.5 / @baseFont;
      }
    }
    &:before{
      content: "";
      display: block;
      padding-right: 5px;
      width: 40rem * 1.5 / @baseFont;
      height: 40rem * 1.5 / @baseFont;
      background-size: 40rem * 1.5 / @baseFont 40 * 1.5rem / @baseFont;
      background-repeat: no-repeat;
      background-image: url("../assets/img/avater1.png");
    }
  }

</style>
