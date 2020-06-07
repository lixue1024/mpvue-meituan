<template>
  <div class="mtguess">
    <div class="guess_title">
      -猜你喜欢-
    </div>
    <div class="guess_content" v-for="(item, i) in guess" :key="i">
      <a href="" class="item">
        <div class="item_left">
          <img mode="widthFix" :src="item.img_src" alt="">
        </div>
        <div class="item_right">
          <div class="item_name1">
            <div class="shop_name">{{item.brand_name}}</div>
            <div class="shop_dis">{{item.dis}}m</div>
          </div>
          <div class="item_name2">
            <div class="goods_name">{{item.desc}}</div>
          </div>
          <div class="item_name3">
            <div class="goods_price">￥{{item.price}}</div>
            <div class="goods_sell">已售{{item.count}}</div>
          </div>
          <div class="item_name4">
            <div class="goods_discount">
              {{item.discount}}
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['guess']

}
</script>

<style lang="scss">
.mtguess {
  padding: 5px;
  .guess_title {
    height: 30px;
    text-align: center;
    color: #666;
  }
  .guess_content {
    .item {
      display: flex;
      justify-content: space-between;
      flex: 8;
      height: 100px;
      .item_left {
        flex: 2;
        margin-right: 10px;
        img {
          width: 100%
        }
      }
      .item_right {
        flex: 6;
        .item_name1 {
          display: flex;
          justify-content: space-between;
          .shop_name {
            font-size: 14px;
          }
          .shop_dis {
            font-size: 12px;
            color: #666;
          }
        }
        .item_name2 {
          .goods_name {
            font-size: 12px;
            color: #666;
          }
        }
        .item_name3 {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          .goods_price {
            color: red;
          }
          .goods_sell {}
        }
        .item_name4 {
          .goods_discount {
            width: 44px;
            padding: 0 2px;
            border: 1px solid red;
            background-color: pink;
            font-size: 12px;
            color: red;
          }
        }
      }
    }

  }

}


</style>
