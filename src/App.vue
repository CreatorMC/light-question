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
</template>

<style scoped>

</style>
