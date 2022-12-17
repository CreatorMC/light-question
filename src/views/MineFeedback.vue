<script>
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
    <div>
        <van-nav-bar title="意见反馈" left-text="返回" right-text="提交" left-arrow @click-left="onClickLeft" />

        <van-cell-group inset>
            <van-field v-model="message" rows="2" autosize label="意见" type="textarea" maxlength="255"
                placeholder="写下您的问题和建议，如用户使用体验，需要改进的问题等，我们预计在15日之内给您邮件反馈" show-word-limit />
        </van-cell-group>

        <van-cell-group inset>
            <van-field v-model="value" rows="2" autosize label="联系方式" label-align="top" type="textarea"
                placeholder="请输入手机号或QQ号，我们会在必要时和您联系" show-word-limit />
        </van-cell-group>
    </div>
</template>

<style scoped>

</style>