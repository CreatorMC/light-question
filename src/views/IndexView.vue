<script>
import { ref } from 'vue';
import tabbarVue from '../components/Tabbar.vue';
import animate from "animate.css";

export default {
  name: "index",
  data() {
    return {
      visibleHello: true,
      enterClass: "",
      leaveClass: ""
    }
  },
  components: {
    tabbarVue,
  },
  setup() {
    const active = ref(0);
    return { active };
  },
  //使用watch 监听$router的变化
  watch: {
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.meta.index > from.meta.index) {
        //设置动画名称
        this.enterClass = 'animate__animated animate__slideInRight'
        this.leaveClass = 'animate__animated animate__fadeOut'
      } else if(to.meta.index < from.meta.index) {
        this.enterClass = 'animate__animated animate__fadeIn'
        this.leaveClass = 'animate__animated animate__slideOutRight'
      } else {
        this.enterClass = ""
        this.leaveClass = ""
      }
    }
  }
};
</script>

<template>
  <div>
    <router-view v-slot="{ Component }">
      <!-- 必须加个mode="out-in"，这样在过渡时不会破坏布局，详见：https://cn.vuejs.org/guide/built-ins/transition.html#transition-modes -->
      <transition :enter-active-class="enterClass" :leave-active-class="leaveClass" mode="out-in">
        <KeepAlive include="Book">
          <component :is="Component" />
        </KeepAlive>
      </transition>
    </router-view>
    <tabbarVue></tabbarVue>
  </div>
</template>

<style scoped>

</style>
