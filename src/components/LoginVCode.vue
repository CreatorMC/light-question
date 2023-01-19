<script>
import { ref, watch } from 'vue';
import { useFileStore } from '../../stores/file';
export default {
  data() {
    return {
      form: {
        phone: ""
      }
    }
  },
  methods: {
    onClickLeft() {
      history.back();
    },
    onSubmit(values) {
      this.$axios.post(this.$springbooturl + "/api/User/login/code",{
        code: this.value,
        phone: this.form.phone
      }).then(response => {
        if (response.data != null) {
          if(response.data == 1) {
            //redis验证码失效，需提示用户后退到上一界面，重新发送验证码
            this.$toast({
              message: '验证码已失效，请退到上一页面，重新生成验证码',
              position: 'bottom',
            });
          } else if(response.data == 2) {
            //验证码输入错误
            this.$toast({
              message: '验证码输入错误',
              position: 'bottom',
            });
          } else {
            //成功
            const store = useFileStore();
            store.user = response.data;
            localStorage.setItem("user-info", JSON.stringify(response.data));
            this.$toast({
              message: '登录成功',
              position: 'bottom',
            });
            //进入主页
            this.$router.push('/index');
          }
        } else {
          //意外错误
          this.$toast({
            message: '意外的错误，请检查网络后重试',
            position: 'bottom',
          });
        }
      })
    }
  },
  mounted() {
    this.form.phone = this.$route.query.phone;
  },
  setup() {
    var value = ref('');
    const showKeyboard = ref(false);

    watch(value, (newVal) => {
      if (newVal.length >= 6) {
        value = newVal.substring(0, 6);   //限制长度
      }
    });

    return {
      value,
      showKeyboard
    };
  },
}
</script>

<template>
  <div class="container">
    <van-form @submit="onSubmit(form)">
      <van-nav-bar
        class="top-nav"
        title=""
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="title">
        <h2>输入短信验证码</h2>
        <span>{{ form.phone }}请输入测试验证码：123456</span>
      </div>
      <!-- 密码输入框 -->
      <van-password-input
        info="未注册的手机号将自动注册，测试验证码：123456"
        :value="value"
        :focused="showKeyboard"
        :length="6"
        @focus="showKeyboard = true"
      />
      <!-- 数字键盘 -->
      <van-number-keyboard
        safe-area-inset-bottom
        v-model="value"
        :show="showKeyboard"
        @blur="showKeyboard = false"
      />
      <div style="margin: 16px;">
        <van-button round block type="primary" color="#dcdee0" native-type="submit">
          <span class="button-color">下一步</span>
        </van-button>
      </div>
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
  margin-top: 3%;
  padding: var(--van-cell-horizontal-padding);
}
.top-nav {
  margin-top: 22px;
  background: none;
  --van-nav-bar-text-color: black;
  --van-nav-bar-icon-color: black;
}
.button-color {
  color: black;
}
</style>