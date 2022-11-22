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
      new URL("/src/assets/images/university.png", import.meta.url).href,
      new URL("/src/assets/images/consult.png", import.meta.url).href,
      new URL("/src/assets/images/improvement.png", import.meta.url).href,
      new URL("/src/assets/images/Finance.png", import.meta.url).href,
      new URL("/src/assets/images/Psychology.png", import.meta.url).href,
      new URL("/src/assets/images/jurisprudence.png", import.meta.url).href,
      new URL("/src/assets/images/Auditing.png", import.meta.url).href,
      new URL("/src/assets/images/Law.png", import.meta.url).href,
      new URL("/src/assets/images/Comprehensive-evaluation.png", import.meta.url).href,
      new URL("/src/assets/images/more.png", import.meta.url).href,
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