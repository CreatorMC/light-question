<script>
import { ref } from 'vue';
import { useFileStore } from '../stores/file';
import HelloView from './views/HelloView.vue';

export default {
  data() {

    return {
      visibleHello: true
    }
    
  },
  components: {
    HelloView
  },
  created() {
    //进入时，获取存储的用户信息，存储到全局变量中
    const store = useFileStore();
    store.user = JSON.parse(localStorage.getItem("user-info"));
    this.$axios.get("/api/User/check", null).then((response) => {
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
};
</script>

<template>
  <HelloView v-show="visibleHello"></HelloView>
  <router-view></router-view>
  <!-- 禁止页面缩放 -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;"/>
</template>

<style scoped>

</style>
