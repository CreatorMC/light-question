<script>
import { ref } from 'vue';
import { useFileStore } from '../stores/file';
import HelloView from './views/HelloView.vue';
import animate from "animate.css";

export default {
  data() {

    return {
      visibleHello: true,
      enterClass: "",
      leaveClass: ""
    }
    
  },
  components: {
    HelloView
  },
  created() {
    //进入时，获取存储的用户信息，存储到全局变量中
    const store = useFileStore();
    store.user = JSON.parse(localStorage.getItem("user-info"));
    this.$axios.get(this.$springbooturl + "/api/User/check", null).then((response) => {
      if(response.data != null && response.data != "") {
        console.log("保持登录成功");
        //进入主页
        this.$router.push('/index');
      } else {
        console.log("未登录，需要登录");
      }
    });
  },
  mounted() {
    this.$router.push('/login/sms')
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
      }
    }
  }
};
</script>

<template>
  <HelloView v-show="visibleHello"></HelloView>
  <router-view v-slot="{ Component }">
    <transition :enter-active-class="enterClass" :leave-active-class="leaveClass">
      <component :is="Component" />
    </transition>
  </router-view>
  <!-- 禁止页面缩放 -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;"/>
</template>

<style scoped>

</style>
