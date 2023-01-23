<script>
export default {
  data() {
    return {
      passwordType: "password",
      form: {
        email: "",
        password: "",
        uuid: "",
        vCode: ""
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
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      });
      this.$axios.post(this.$springbooturl + "/api/User/registerCode",this.form).then(response => {
        this.$toast.clear(true);
        if (response.data != null) {
          if(response.data.resultString == "0") {
            this.$toast({
              message: '注册成功',
              position: 'bottom',
            });
            this.$router.push({
              'path': '/login/password',
            });
          } else if(response.data.resultString == "-1") {
            this.$toast({
              message: '验证码错误',
              position: 'bottom',
            });
          } else {
            this.$toast({
              message: '验证码已失效，请退到上一页面，重新生成验证码',
              position: 'bottom',
            });
          }
        } else {
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
    back() {
      history.back();
    }
  },
  mounted() {
    this.form.email = this.$route.query.email;
    this.form.password = this.$route.query.password;
    this.form.uuid = this.$route.query.uuid;
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
        <h3>验证码已发送到<br>{{this.$utils.tmEmail(form.email)}}</h3>
      </div>
      <van-form @submit="onSubmit">
        <van-field
          class="none-bg-color"
          v-model="form.vCode"
          :type="passwordType"
          name="vCode"
          label="验证码"
          placeholder="请填写验证码"
          :rules="[{ required: true, message: '请填写验证码' }]"
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
            <span class="button-color">确定</span>
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
</style>