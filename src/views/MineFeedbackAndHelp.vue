<script>
import { createApp } from 'vue';
import { Cell, CellGroup } from 'vant';

const app = createApp();
app.use(Cell);
app.use(CellGroup);

export default {
    setup() {
        const onClickLeft = () => history.back();
        return {
            onClickLeft,
        };
    },
    methods: {
        onclick() {
            this.$router.push({ name: 'MineFeedback' })
        }
    },
};

</script>

<template>
    <div class="container">
        <van-nav-bar title="帮助与反馈" left-text="返回" left-arrow @click-left="onClickLeft" />
        <div class="title">热点问题</div>
        <van-cell-group inset>
            <van-cell center title="账号与登录" label="账号被封、忘记密码、收到安全提醒" is-link />
            <van-cell title="问题1" is-link />
            <van-cell title="问题1" is-link />
            <van-cell title="问题1" is-link />
            <van-cell title="问题1" is-link />
            <van-cell title="问题1" is-link />
            <van-cell title="问题1" is-link />
            <van-cell title="问题1" is-link />
        </van-cell-group>
        <van-button icon="https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png" type="primary" class="button"
            @click="onclick">
            意见反馈
        </van-button>
    </div>
</template>

<style scoped>
.title {
    position: relative;
    left: 20px;
}

.button {
    position: fixed;
    bottom: 0px;
    width: 100%;
}

.container {
    position: absolute;
    width: 100%;
    left: 0px;
    top: 0px;
    height: calc(100vh);
}
</style>