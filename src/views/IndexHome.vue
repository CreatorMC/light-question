<script>
import searchVue from '../components/IndexSearch.vue';
import TabVue from '../components/IndexTab.vue'
import swipeVue from '../components/IndexSwipe.vue';
import gridVue from '../components/IndexGrid.vue';
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
  <div>
    <searchVue></searchVue>
    <swipeVue></swipeVue>
    <gridVue></gridVue>
    <TabVue></TabVue>
  </div>
</template>

<style scoped>
</style>