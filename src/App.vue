<script>
import { ref } from 'vue';
import HelloView from './views/HelloView.vue';

export default {
  data() {
    return {
      visibleHello: true
    }
  },
  components: {
    HelloView
  },
  setup() {
    const active = ref(0);
    return { active };
  },
};

</script>

<template>
  <HelloView v-show="visibleHello"></HelloView>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="wap-home-o">标签</van-tabbar-item>
    <van-tabbar-item icon="search">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped>

</style>
