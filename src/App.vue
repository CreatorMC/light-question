<script>
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
  setup() {
    const active = ref(0);
    return { active };
  },
};

export default{
  components:{
    searchVue,tabbarVue
  }
}
</script>

<template>
  <HelloView v-show="visibleHello"></HelloView>
  <searchVue></searchVue>
  <tabbarVue></tabbarVue>
</template>

<style scoped>
</style>
