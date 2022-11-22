<script>
import { ref } from 'vue';
import tabbarVue from '../components/Tabbar.vue';

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
  <div>
    <router-view></router-view>
    <tabbarVue></tabbarVue>
  </div>
</template>

<style scoped>

</style>
