<template>
  <div class="mt_swiper">
    <swiper
    autoplay="true"
    indicator-dots="true">
      <swiper-item v-for="(item, i) in swiperArr" :key="i">
      <a href="">
        <img :src="item.img_src" alt="">
      </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
export default {
  props: ['swiperArr']

}
</script>

<style lang="scss">
.mt_swiper {
  margin-top: 5px;
  swiper {
    height: 90px;
    a, img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
