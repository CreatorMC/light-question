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
};
</script>

<template>
    <div class="container">
        <van-nav-bar title="设置" left-text="返回" left-arrow @click-left="onClickLeft" />
        <van-cell-group>
            <van-cell center title="账号与安全" is-link />
            <van-cell title="下载设置" is-link />
            <van-cell title="消息设置" is-link />
            <van-cell title="通用设置" is-link />
            <van-cell title="用户协议" is-link />
            <van-cell title="隐私政策" is-link />
            <van-cell title="安全条款" is-link />
            <van-cell title="关于" is-link />
            <van-cell title="检查更新" label="当前版本：1.0" is-link />
        </van-cell-group>
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