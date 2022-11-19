<script>
import searchVue from '../components/search.vue';
import TabVue from '../components/tab.vue'
import swipeVue from '../components/swipe.vue';
import gridVue from '../components/grid.vue';
export default {
  data() {
    return {

    }
  },
  components: {
    searchVue,
    TabVue,
    swipeVue,
    gridVue,
  }
}
</script>

<template>
  <searchVue></searchVue>
  <swipeVue></swipeVue>
  <gridVue></gridVue>
  <TabVue></TabVue>
</template>

<style scoped>
</style>