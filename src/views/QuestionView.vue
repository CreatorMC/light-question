<script>
export default {
  data() {
    return {
      item: {}
    }
  },
  methods: {
    onClickLeft() {
      history.back();
    },
    getAssetsImages(name) {
      return new URL(`/src/assets/images/${name}`, import.meta.url).href;
    }
  },
  mounted() {
    this.item = this.$route.query;
  }
}
</script>

<template>
  <div class="fix">
    <van-nav-bar
      :title="item.title"
      left-text="返回"
      left-arrow
      :fixed="true"
      class="line-bottom"
      :z-index="100"
      @click-left="onClickLeft"
    />
    <div class="container">
      <van-row>
        <van-col :span="24" class="center-text">
          <h3 class="van-multi-ellipsis--l3">{{ item.title }}</h3>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="12">
          <div class="text-padding">题数：{{ item.totalNum }}</div>
        </van-col>
        <van-col :span="12">
          <div class="text-padding">总分：{{ item.totalScore }}</div>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24" class="style-button">
          <van-button class="" color="linear-gradient(to right, #ff6034, #ee0a24)">
            开始答题
          </van-button>
        </van-col>
      </van-row>
    </div>
    <van-image class="bg" width="100%" height="100%" fit="cover" position="center" :src="getAssetsImages('bg.png')" />
  </div>
</template>

<style scoped>
.fix {
  position: fixed;
  width: 100%;
  left: 0px;
  top: 0px;
  height: 100%;
}
.container {
  position: relative;
  margin-top: 56px;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  border-radius: 30px;
  background: #ffffffa2;
  z-index: 1;
}
.bg {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 0;
}
.center-text {
  text-align: center;
}
.center-text h3 {
  padding-left: 1em;
  padding-right: 1em;
}
.text-padding {
  padding: 1em;
  padding-top: 3em;
  text-align: center;
}
.style-button {
  text-align: center;
  margin-top: 3em;
  margin-bottom: 3em;
}
</style>