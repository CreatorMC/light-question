<script>
import { ref } from 'vue';
import tabbarVue from '../components/tabbar.vue';

export default {
  data() {
    return {
      visibleHello: true
    }
  },
  components: {
    tabbarVue,
  },
  setup() {
    const active = ref(0);
    return { active };
  },
};
</script>

<template>
  <router-view></router-view>
  <tabbarVue></tabbarVue>
</template>

<style scoped>

</style>
