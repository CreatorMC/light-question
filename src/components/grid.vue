<script>
import { createApp } from 'vue';
import { Grid, GridItem } from 'vant';

const app = createApp();
app.use(Grid);
app.use(GridItem);

export default {

}

</script>

<template>
  <van-grid>
    <van-grid-item icon="photo-o" text="院校" />
    <van-grid-item icon="photo-o" text="咨询" />
    <van-grid-item icon="photo-o" text="自我提升" />
    <van-grid-item icon="photo-o" text="金融学" />
    <van-grid-item icon="photo-o" text="心理学" />
    <van-grid-item icon="photo-o" text="经济学" />
    <van-grid-item icon="photo-o" text="期末突击" />
    <van-grid-item icon="photo-o" text="综合测评" />
  </van-grid>

</template>

<style scoped>

</style>