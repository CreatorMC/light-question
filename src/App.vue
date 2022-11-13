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
  setup() {
    const active = ref(0);
    return { active };
  },
};
</script>

<template>
  <HelloView v-show="visibleHello"></HelloView>
  <IndexViewVue></IndexViewVue>
</template>

<style scoped>

</style>
