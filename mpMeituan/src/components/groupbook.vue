<template>
  <div class="group_book_row">
    <div class="gb_title">
      <text>好货拼团</text>
      <text>全部></text>
    </div>
    <div class="gb_content">
      <a href="" v-for="(item, i) in groupbook" :key="i">
        <img mode="widthFix" :src="item.img_src" alt="">
        <div class="goods_name">{{item.brand_name}}</div>
        <div class="goods_price_row">
          <text class="new_price">{{item.price}}</text>
          <text class="old_price">{{item.old_price}}</text>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['groupbook']

}
</script>

<style lang="scss">
.group_book_row {
  .gb_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px;
    text:nth-child(1) {
      font-size: 20px;
    }
    text:nth-child(2) {
      font-size: 16px;
      color: #666;
    }
  }
  .gb_content {
    overflow-x: auto;
    white-space: nowrap;
    margin-top: 5px;
    a {
      width: 30%;
      margin-left: 10px;
      display: inline-block;
      img {
        width: 100%;
      }
      .goods_name {
        font-size: 16px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .goods_price_row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .new_price {
          font-size: 16px;
          color: red;
        }
        .old_price{
          font-size: 14px;
          color: #666;
          text-decoration: line-through;
        }
      }
    }

  }
}
</style>
