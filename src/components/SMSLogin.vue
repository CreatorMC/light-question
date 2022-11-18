<script>
export default {
  data() {
    return {
      form: {
        phone: ""
      }
    }
  },
  methods: {
    onSubmit(values) {
      this.$axios.post("/api/User/login",this.form).then(response => {
        if (response.data != null) {
          console.log(response.data);
        } else {
          //登录失败
          this.$toast({
            message: '意外的错误，请检查网络后重试',
            position: 'bottom',
          });
        }
      });
      this.$router.push(
        {
          'path': '/login/vcode',
          'query': { phone: values.phone }
        }
      );
    },
    showPasswordLogin() {
      this.$router.push('/login/password');
    },
  }
}
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>输入手机号</h2>
    </div>
    <van-form @submit="onSubmit">
      <van-field
        class="none-bg-color"
        v-model="form.phone"
        type="tel"
        name="phone"
        label="+86"
        placeholder="请输入您的手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="primary" color="#dcdee0" native-type="submit">
          <span class="button-color">下一步</span>
        </van-button>
      </div>
      <van-button type="default" size="small" class="none-bg-color" @click="showPasswordLogin">
        <span class="button-color">账号密码登录</span>
      </van-button>
    </van-form>
  </div>
</template>

<style scoped>
.container {
  position: absolute;
  width: 100%;
  z-index: 20;
}
.title {
  margin-top: 20%;
  padding: var(--van-cell-horizontal-padding);
}
.none-bg-color {
  background: none;
}
.button-color {
  color: black;
}
</style>