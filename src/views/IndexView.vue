<script>
import { ref } from 'vue';
import searchVue from '../components/search.vue';
import tabbarVue from '../components/tabbar.vue';
import swipeVue from '../components/swipe.vue';
import gridVue from '../components/grid.vue';

export default {
  data() {
    return {
      visibleHello: true
    }
  },
  components: {
    searchVue,
    tabbarVue,
    swipeVue,
    gridVue
  },
  setup() {
    const active = ref(0);
    return { active };
  },
};
</script>

<template>
  <searchVue></searchVue>
  <swipeVue></swipeVue>
  <gridVue></gridVue>
  <tabbarVue></tabbarVue>
</template>

<style scoped>

</style>
