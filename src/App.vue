<script>
import HelloView from './views/HelloView.vue';

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
