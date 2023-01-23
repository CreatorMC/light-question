<script>
export default {
  data() {
    return {
      passwordType: "password",
      passwordConfirmType: "password",
      pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
      patternPassword: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/,
      form: {
        email: "",
        password: "",
        confirmPassword: ""
      },
      themeVars: {
        navBarBackgroundColor: "#00000000",
        navBarArrowSize: "20px",
        navBarHeight: "100px"
      }
    }
  },
  methods: {
    onSubmit(values) {
      delete values.confirmPassword;
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      });
      this.$axios.post(this.$springbooturl + "/api/User/register",values).then(response => {
        this.$toast.clear(true);
        if (response.data != null) {
          if(response.data.uuid == "-1") {
            this.$toast({
              message: '此邮箱已被注册',
              position: 'bottom',
            });
          } else if(response.data.uuid == "-2") {
            this.$toast({
              message: '邮件发送失败',
              position: 'bottom',
            });
          } else {
            //邮件发送成功
            this.$router.push({
              'path': '/login/registerVCode',
              'query': {
                email: this.form.email,
                password: this.form.password,
                uuid: response.data.uuid
              }
            });
          }
        } else {
          //服务端发送验证码失败
          this.$toast({
            message: '意外的错误，请检查网络后重试',
            position: 'bottom',
          });
        }
      });
    },
    switchPasswordType() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
    },
    switchPasswordConfirmType() {
      this.passwordConfirmType = this.passwordConfirmType === 'password' ? 'text' : 'password'
    },
    checkPassword() {
      return this.form.password == this.form.confirmPassword;
    },
    back() {
      history.back();
    }
  }
}
</script>

<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="container">
      <van-nav-bar
        left-arrow
        :fixed="true"
        :safe-area-inset-top="true"
        @click-left="back"
      />
      <div class="title">
        <h2>账号注册</h2>
      </div>
      <van-form @submit="onSubmit">
        <van-field
          class="none-bg-color"
          v-model="form.email"
          type="email"
          name="email"
          label="电子邮箱"
          placeholder="请输入您的邮箱"
          :rules="[
            {
              pattern: pattern,
              message: '邮箱格式不正确'
            }
          ]"
        />
        <van-field
          class="none-bg-color"
          v-model="form.password"
          :type="passwordType"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[
            { required: true, message: '请填写密码' },
            {
              pattern: patternPassword,
              message: '必须包含大小写字母和数字的组合，长度在8-16之间'
            }
          ]"
        >
          <template #button>
            <span @click="switchPasswordType">
              <van-icon name="closed-eye" v-if="passwordType=='password'"/>
              <van-icon name="eye-o" v-else />
            </span>
          </template>
        </van-field>
        <van-field
          class="none-bg-color"
          v-model="form.confirmPassword"
          :type="passwordConfirmType"
          name="confirmPassword"
          label="确认密码"
          placeholder="再次输入密码"
          :rules="[
            { required: true, message: '请填写密码' },
            {
              validator: checkPassword,
              message: '两次输入的密码不一致'
            }
          ]"
        >
          <template #button>
            <span @click="switchPasswordConfirmType">
              <van-icon name="closed-eye" v-if="passwordConfirmType=='password'"/>
              <van-icon name="eye-o" v-else />
            </span>
          </template>
        </van-field>
        <div style="margin: 16px;">
          <van-button round block type="primary" color="#dcdee0" native-type="submit">
            <span class="button-color">注册</span>
          </van-button>
        </div>
        
      </van-form>
    </div>
  </van-config-provider>
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
.forget-password {
  float: right;
}
</style>