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
</template>

<style scoped>

</style>
