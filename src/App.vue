<script>
import { ref } from 'vue';
import HelloView from './views/HelloView.vue';

export default {
  data() {
    return {
      visibleHello: true
    }
  },
  components: {
    HelloView,

  },
  setup() {
    const active = ref(0);
    return { active };
  },
};
</script>

<template>
  
</template>

<style scoped>

</style>
