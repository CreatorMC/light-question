<script>
export default {
  data() {
    return {
      passwordType: "password",
      form: {
        phone: "",
        password: ""
      }
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
    switchPasswordType() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
    },
    back() {
      history.back();
    }
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
            <van-icon name="eye-o" v-if="passwordType=='password'"/>
            <van-icon name="closed-eye" v-else />
          </span>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="primary" color="#dcdee0" native-type="submit">
          <span class="button-color">下一步</span>
        </van-button>
      </div>
      <van-row>
        <van-col span="8">
          <van-button type="default" size="small" class="none-bg-color" @click="back">
            <span class="button-color">短信登录</span>
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