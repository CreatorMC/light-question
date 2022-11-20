<script>
// import Singlechoicequestion from '../components/Single choice question.vue'

export default {
  setup() {
    const onClickLeft = () => history.back();
    return {
      onClickLeft,
    };
  },
//   components:{
//     Singlechoicequestion,
//   }

};

</script>

<template>
    <van-nav-bar
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
<div>
    这答题界面怎么写？？？？
</div>



<!-- <Singlechoicequestion></Singlechoicequestion> -->

</template>

<style scoped>

</style>