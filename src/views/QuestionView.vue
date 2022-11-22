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
      @click-left="onClickLeft"
    />
    <div class="container">

    </div>
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
  margin-top: 56px;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  height: 80%;
  border-radius: 30px;
  background: #ffffff;
}
</style>