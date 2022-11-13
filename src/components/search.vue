<script>
import { ref } from 'vue';
import { Toast } from 'vant';

export default {
  setup() {
    const value = ref('');
    const onSearch = (val) => Toast(val);
    const onCancel = () => Toast('取消');
    return {
      value,
      onSearch,
      onCancel,
    };
  },
};


</script>

<template>
<form action="/">
  <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  />
</form>

</template>

<style scoped>

</style>

