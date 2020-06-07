<template>
  <div class="mtad">
    <a href="" v-for="(item, i) in adArr" :key="i">
      <img mode="widthFix" :src="item.img" alt="">
    </a>
  </div>
</template>

<script>
export default {
  props: ['adArr']

}
</script>

<style lang="scss">
.mtad {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 5px;
  a{
    width: 48%;
    margin-left: 5px;
    img{
      width: 100%;
    }
  }
}

</style>
