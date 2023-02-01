<script>

export default {
  data() {
    return {
      texts: [
        "我的创作",
        "学习周报",
        "我的收藏",
        "浏览记录",
        "我的学币",
        "离线下载",
        "错题集",
        "帮助与反馈",
      ],
      photos: [
        new URL("/src/assets/images/write.png", import.meta.url).href,
        new URL("/src/assets/images/weekly.png", import.meta.url).href,
        new URL("/src/assets/images/Collection.png", import.meta.url).href,
        new URL("/src/assets/images/record.png", import.meta.url).href,
        new URL("/src/assets/images/money.png", import.meta.url).href,
        new URL("/src/assets/images/download.png", import.meta.url).href,
        new URL("/src/assets/images/mistakes.png", import.meta.url).href,
        new URL("/src/assets/images/help.png", import.meta.url).href,
      ],
      gridtextlist: []
    }
  },
  setup() {

  },
  methods: {
    onclick(index) {

      switch(index){
        // case 0:
        // this.$router.push({name:'MineFeedbackAndHelp'})

        // case 1:
        // this.$router.push({name:''})

        // case 2:
        // this.$router.push({name:''})

        // case 3:
        // this.$router.push({name:''})
        
        // case 4:
        // this.$router.push({name:''})
        
        // case 5:
        // this.$router.push({name:''})
        
        // case 6:
        // this.$router.push({name:''})
        
        case 7:
        this.$router.push({name:'MineFeedbackAndHelp'})
        
      }

    }
  },
}

</script>

<template>
  <van-grid :column-num="4">
    <van-grid-item v-for="(value, index) in texts" :icon="photos[index]" :text="texts[index]" @click="onclick(index)"/>
  </van-grid>

  <van-grid square>
    <van-grid-item v-for="(item, index) in gridtextlist" :key="index" :text="item.text" :icon="item.photo" />
    {{ item }}
  </van-grid>


</template>

<style scoped>

</style>