<script>
import MineGrid from '../components/MineGrid.vue'
import { ref } from 'vue';
export default {
  data() {
    return {
      setting: new URL("/src/assets/images/setting.png", import.meta.url).href,
      saomiao: new URL("/src/assets/images/saomiao.png", import.meta.url).href,
      night: new URL("/src/assets/images/night.png", import.meta.url).href,
      message: new URL("/src/assets/images/message.png", import.meta.url).href,

    }
  },
  setup() {
    const checked = ref(true);
    return { checked };
  },
  methods: {
    getAssetsImages(name) {
      return new URL(`/src/assets/images/${name}`, import.meta.url).href;
    }
  },
  components: {
    MineGrid
  }

}
</script>

<template>
  <div>
    <div class="cover">
      <van-icon :name="setting" class="set" size="25px" />
      <van-icon :name="saomiao" class="saomiao" size="20px" />
      <van-icon :name="night" class="night" size="30px" />
      <van-icon :name="message" class="message" size="25px" />
      <van-image round fit="cover" width="100px" height="100px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <div>
        点击登录
      </div>
    </div>
    <mine-grid></mine-grid>
  </div>
</template>

<style scoped>
.cover {
  position: relative;
  text-align: center;
  padding: 50px;
  background-color: rgb(139, 108, 108);
  color: white;
}

.set {
  position: absolute;
  left: 330px;
  bottom: 188px;
  z-index: 2;
}

.saomiao {
  position: absolute;
  bottom: 190px;
  left: 295px;
}

.night {
  position: absolute;
  bottom: 185px;
  left: 250px;
}

.message {
  position: absolute;
  bottom: 188px;
  left: 10px;
}
</style>