<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<template>
  <van-button class="pass none-bg-color" type="default" size="small" round>
    跳过
  </van-button>
  <router-view></router-view>
  <van-image class="bg" width="100%" height="100%" fit="cover" position="center" src="../static/bg.png" />
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
  z-index: 20;
}
</style>