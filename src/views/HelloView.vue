<script>
import { ref } from 'vue';

export default {
  data() {
    return {
    };
  },
  methods: {
    visibleSelf() {
      this.$parent.visibleHello = false
    }
  },
  setup() {
    const time = ref(3 * 1000);
    return { time };
  },
}
</script>

<template>
  <div class="size">
    <van-button class="count-down z-index" type="default" size="small" round @click="visibleSelf">
      <van-count-down :time="time" format="ss s" @finish="visibleSelf" />
    </van-button>
    <van-image class="image" width="100%" height="100%" fit="cover" position="center" src="../hello.png" />
    <van-image class="image z-index align" width="100%" height="15%" fit="contain" position="center"
      src="../hello_bottom.png" />
  </div>
</template>

<style scoped>
.size {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 100;
  width: 100%;
  height: 100%;
}

.image {
  position: absolute;
  display: block;
}

.z-index {
  z-index: 100;
}

.align {
  background-color: #FFFFFF;
  bottom: 0px;
}

.count-down {
  position: absolute;
  top: 30px;
  right: 30px;
  background: #ffffff87;
}
</style>