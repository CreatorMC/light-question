<script>
import { createApp } from 'vue';
import { Button } from 'vant';
import { Toast } from 'vant';

const app = createApp();
app.use(Button);

export default {
  setup() {
    const onClickLeft = () => history.back();
    const onClickRight = () => Toast('还没做出来呢，先等等。');
    return {
      onClickLeft,
      onClickRight,
    };
  },
  methods:{
    start(){
        this.$router.push('/answer')
    },
    getAssetsImages(name) {
      return new URL(`/src/assets/images/${name}`, import.meta.url).href;
    }
  }
};

</script>

<template>
<van-nav-bar
  left-text="返回"
  right-text="历史记录"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
<van-button color="linear-gradient(to right, #ff6034, #ee0a24)" @click="start" class="b">
  开始答题
</van-button>
<van-image class="bg" width="100%" height="100%" fit="cover" position="center" :src="getAssetsImages('bg.png')" />
</template>

<style scoped>
.b{
    position: absolute;
    left: 150px;
    top: 500px;
}
.bg {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -10;
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