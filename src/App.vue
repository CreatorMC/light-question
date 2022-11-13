<script>
import { ref } from 'vue';
import HelloView from './views/HelloView.vue';
import searchVue from './components/search.vue';
import tabbarVue from './components/tabbar.vue';

export default {
  data() {
    return {
      visibleHello: true
    }
  },
  components: {
    HelloView,
    searchVue,
    tabbarVue
  },
  setup() {
    const active = ref(0);
    return { active };
  },
};
</script>

<template>
  <HelloView v-show="visibleHello"></HelloView>
  <searchVue></searchVue>
  <tabbarVue></tabbarVue>
</template>

<style scoped>

</style>
