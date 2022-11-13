<script>
export default {
  methods: {
    showIndexView() {
      this.$router.push('/index')
    },
    getAssetsImages(name) {
      return new URL(`/src/assets/images/${name}`, import.meta.url).href;
    }
  },
}
</script>

<template>
  <van-button class="pass none-bg-color" type="default" size="small" round @click="showIndexView">
    跳过
  </van-button>
  <router-view></router-view>
  <van-image class="bg" width="100%" height="100%" fit="cover" position="center" :src="getAssetsImages('bg.png')" />
</template>

<style scoped>
.bg {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 10;
}
.none-bg-color {
  background: none;
}
.pass {
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 50;
}
</style>