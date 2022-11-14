<script>
import { ref, watch } from 'vue';
export default {
  data() {
    return {
      phone: ""
    }
  },
  methods: {
    onClickLeft() {
      history.back();
    }
  },
  mounted() {
    this.phone = this.$route.query.phone;
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
    <van-nav-bar
      class="top-nav"
      title=""
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="title">
      <h2>输入短信验证码</h2>
      <span>已向您的手机{{ phone }}发送验证码</span>
    </div>
    <!-- 密码输入框 -->
    <van-password-input
      info="未注册的手机号将自动注册"
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