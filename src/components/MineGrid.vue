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
        "我的创作",
        "学习周报",
        "我的收藏",
        "浏览记录",
        "我的学币",
        "离线下载",
        "错题集",
        "帮助与反馈",
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
      ],
    }
  },
  setup() {
    
  },
}

</script>

<template>
  <van-grid :column-num="4">
  <van-grid-item v-for="(value, index) in texts" :icon="photos[index]" :text="texts[index]" />
</van-grid>

<van-grid square>
      <van-grid-item 
            v-for="(item,index) in gridtextlist" 
            :key="index"
            :text="item.text"
            :icon="item.photo"
      />
      {{item}}
    </van-grid>


</template>

<style scoped>

</style>