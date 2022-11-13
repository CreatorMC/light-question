<script>
import { ref } from 'vue';
import HelloView from './views/HelloView.vue';
import IndexViewVue from './views/IndexView.vue';

export default {
  data() {

    return {
      visibleHello: true
    }
    
  },
  components: {
    HelloView,
    IndexViewVue
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
  <IndexViewVue></IndexViewVue>
  <!-- 禁止页面缩放 -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;"/>
</template>

<style scoped>

</style>
