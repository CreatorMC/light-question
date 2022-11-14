<script>
import { createApp } from 'vue';
import { Cell, CellGroup } from 'vant';

const app = createApp();
app.use(Cell);
app.use(CellGroup);

export default{
}
</script>

<template>
    <van-cell-group inset="true" class="a">
  <van-cell title="2021-2022 计算机文化基础 期末考试A卷" is-link="true"/>
  <van-cell title="2021-2022 法学概论 期末考试A卷" is-link="true"/>
  <van-cell title="2021-2022 微观经济学 期末考试A卷" is-link="true"/>
  <van-cell title="2021-2022 新闻学基础 期末考试A卷" is-link="true"/>
  <van-cell title="2021-2022 马克思原理 期末考试A卷" is-link="true"/>
</van-cell-group>

</template>

<style>
    .a{
        text-align: left;
    }
</style>