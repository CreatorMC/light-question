<script>
import { createApp } from 'vue';
import { Cell, CellGroup } from 'vant';

const app = createApp();
app.use(Cell);
app.use(CellGroup);

export default{
    data() {
    return {
      station: []
    }
  },
methods: {
    onClick(targetpath) {
      //方法1：path跳转
      //方法2：名字跳转
       this.$router.push(targetpath)
      ({
        path:targetpath,
        // name:targetname
      })
    }
}

}
</script>

<template>
<van-cell-group :inset="true" class="a">
  <van-cell title="2021-2022 计算机文化基础 期末考试A卷" :is-link="true" @click="onClick('/Indextitle')"/>
  <van-cell title="2021-2022 全国计算机二级考试试题" :is-link="true" @click="onClick"/>
  <van-cell title="2019-2020 计算机导论 期中考试A卷" :is-link="true" @click="onClick"/>
  <van-cell title="2020-2021 搜索引擎与原理 期末考试B卷" :is-link="true" @click="onClick"/>
  <van-cell title="2021-2022 数据恢复与处理 期中考试试题" :is-link="true" @click="onClick"/>
  <van-cell value="内容" />
</van-cell-group>

</template>

<style scoped>
.a{
  text-align: left;
}
</style>