<template>
  <div class="mtnav">
    <a href="" v-for="(item, i) in navs" :key="i">
      <div :class= "['nav_icon','icon','iconfont', item.icon]"></div>
      <div class="nav_text">{{item.text}}</div>
    </a>
  </div>
</template>

<script>
export default {
  props: ['navs']

}
</script>

<style lang="scss">
.mtnav {
  display: flex;
  flex-wrap: wrap;
  padding: 5px 0;
  a {
    width: 20%;
    text-align: center;
    .nav_icon {
      font-size: 20px;
      line-height: 35px;
      width: 35px;
      height: 35px;
      background-color: pink;
      margin: 5px;
      border-radius: 50%;
    }
    .nav_text {
      color: #666;
      font-size: 16px;
    }
  } 
}

</style>
