<script>
import { useFileStore } from '../../stores/file';

export default {
  data() {
    return {
      passwordType: "password",
      pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
      form: {
        email: "",
        password: ""
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
      this.$axios.post(this.$springbooturl + "/api/User/loginEmail",values).then(response => {
        if (response.data != null && response.data != "") {
          const store = useFileStore();
          store.user = response.data;
          localStorage.setItem("user-info", JSON.stringify(response.data));
          this.$toast({
            message: '登录成功',
            position: 'bottom',
          });
          //进入主页
          this.$router.push('/index');
        } else {
          this.$toast({
            message: '邮箱或密码不正确',
            position: 'bottom',
          });
        }
      });
    },
    switchPasswordType() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
    },
    back() {
      this.$router.push({
        'path': '/login/sms'
      });
    },
    toRegister() {
      this.$router.push({
        'path': '/login/register'
      });
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
        <h2>账号登录</h2>
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
          :rules="[{ required: true, message: '请填写密码' }]"
        >
          <template #button>
            <span @click="switchPasswordType">
              <van-icon name="closed-eye" v-if="passwordType=='password'"/>
              <van-icon name="eye-o" v-else />
            </span>
          </template>
        </van-field>
        <div style="margin: 16px;">
          <van-button round block type="primary" color="#dcdee0" native-type="submit">
            <span class="button-color">登录</span>
          </van-button>
        </div>
        <van-row>
          <van-col span="8">
            <van-button type="default" size="small" class="none-bg-color" @click="toRegister">
              <span class="button-color">注册账号</span>
            </van-button>
          </van-col>
          <van-col span="8"></van-col>
          <van-col span="8">
            <van-button type="default" size="small" class="none-bg-color forget-password">
              <span class="button-color">忘记密码？</span>
            </van-button>
          </van-col>
        </van-row>
        
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