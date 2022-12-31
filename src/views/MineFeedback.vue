<script>
import { useFileStore } from '../../stores/file';
export default {
    data() {
        return {
            message: "",
            value: ""
        }
    },
    setup() {
        const onClickLeft = () => history.back();
        return {
            onClickLeft
        };
    },
    methods: {
        submit() {
            const store = useFileStore();
            this.$axios.post(this.$springbooturl + "/api/User/feedback",{
                userid: store.user.id,
                content: this.message,
                contact: this.value
            }).then(response => {
                if (response.data != null) {
                    this.$toast({
                        message: '提交成功',
                        position: 'bottom',
                    });
                    this.message = "";
                    this.value = "";
                } else {
                    this.$toast({
                        message: '意外的错误，请检查网络后重试',
                        position: 'bottom',
                    });
                }
            });
        },
    }
};
</script>

<template>
    <div>
        <van-nav-bar title="意见反馈" left-text="返回" right-text="提交" left-arrow @click-left="onClickLeft"
            @click-right="submit" />

        <van-cell-group inset>
            <van-field v-model="message" rows="2" autosize label="意见" type="textarea" maxlength="255"
                placeholder="写下您的问题和建议，如使用体验，需要改进的问题等。基础功能问题请不要反馈（如用户退出登录等）我们会慢慢完善" show-word-limit  />
        </van-cell-group>

        <van-cell-group inset>
            <van-field v-model="value" rows="2" autosize label="联系方式" label-align="top" type="textarea" maxlength="30"
                placeholder="可以输入邮箱或者QQ号，我们都是山政的学生，您的信息将会被严格保密，不输入也可以" show-word-limit  />
        </van-cell-group>
    </div>
</template>

<style scoped>

</style>