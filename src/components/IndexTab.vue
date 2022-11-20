<script>
import { ref } from 'vue';
import cellVue from './IndexCell.vue';


export default {
    setup() {
        const active = ref(0);
        return { active };
    },
    components: {
        cellVue
    }
};


</script>

<template>
    <van-tabs v-model:active="active" swipeable class="a">
        <van-tab title="计算机科学">
            <cellVue></cellVue>
        </van-tab>
        <van-tab title="会计学">内容 2</van-tab>
        <van-tab title="法学概论">内容 3</van-tab>
        <van-tab title="新闻学">内容 4</van-tab>
        <van-tab title="劳动法学">内容 2</van-tab>
        <van-tab title="思想道德">内容 3</van-tab>
        <van-tab title="经济学">内容 4</van-tab>
    </van-tabs>

</template>

<style>
    .a{
        text-align: center;
    }
</style>