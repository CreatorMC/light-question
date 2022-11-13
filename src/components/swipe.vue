<script>
import { createApp } from 'vue';
import { Swipe, SwipeItem } from 'vant';

export default {
  setup() {
    const images = [
       "./banner1.jpg",
       "./banner2.jpg",
       "./banner3.jpg",
    ];
    return { images };
  },
};

</script>

<template>
    <van-swipe :autoplay="3000" lazy-render touchable="true">
  <van-swipe-item v-for="image in images" :key="image">
    <img class="a" :src="image" />
  </van-swipe-item>
</van-swipe>
</template>


<style  scoped>
.a{
  align-items: center;
  /* width: 375px;
  height: 220px; */
  height: 100%;
  width: 100%;
}
</style>