<script>
import { createApp } from 'vue';
import { Grid, GridItem } from 'vant';

const app = createApp();
app.use(Grid);
app.use(GridItem);

export default {
  data(){
    return{
      texts :[
        "院校",
        "咨询",
        "自我提升",
        "金融学",
        "心理学",
        "法理学",
        "审计学",
        "法学基础",
        "综合测评",
        "更多",
      ],
      photos:[
      new URL("/src/assets/images/院校.png", import.meta.url).href,
      new URL("/src/assets/images/咨询.png", import.meta.url).href,
      new URL("/src/assets/images/自我提升.png", import.meta.url).href,
      new URL("/src/assets/images/金融学.png", import.meta.url).href,
      new URL("/src/assets/images/心理学.png", import.meta.url).href,
      new URL("/src/assets/images/法理学.png", import.meta.url).href,
      new URL("/src/assets/images/审计学.png", import.meta.url).href,
      new URL("/src/assets/images/法学基础.png", import.meta.url).href,
      new URL("/src/assets/images/综合测评.png", import.meta.url).href,
      new URL("/src/assets/images/更多.png", import.meta.url).href,
      ]
    }
  },
  setup() {
    
  },
}

</script>

<template>
  <van-grid :column-num="5">
  <van-grid-item v-for="(value, index) in texts" :icon="photos[index]" :text="texts[index]" />
</van-grid>


</template>

<style scoped>

</style>