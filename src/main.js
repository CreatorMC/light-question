import { createApp } from 'vue'
import { createPinia } from "pinia"
import './style.css'
import App from './App.vue'
import router from "./router"
import axios from "axios"
import globalMixin from './globle'
// Toast
import { Toast } from 'vant';
import 'vant/es/toast/style';

// Dialog
import { Dialog } from 'vant';
import 'vant/es/dialog/style';

// Notify
import { Notify } from 'vant';
import 'vant/es/notify/style';

// ImagePreview
import { ImagePreview } from 'vant';
import 'vant/es/image-preview/style';

const app = createApp(App)
app.mixin(globalMixin)
app.use(createPinia())
app.use(router)
app.use(Toast)
app.use(Dialog)
app.use(Notify)
app.use(ImagePreview)
// 全局配置axios
axios.defaults.withCredentials = true
app.config.globalProperties.$axios = axios


//请求拦截器
axios.interceptors.request.use(
  config => {
    //先从浏览器的localStorage存储中提取token值
    const info = JSON.parse(localStorage.getItem("user-info"));
    if (info == null) {
      return config;
    }
    const tokenStr = info.token
    if (tokenStr) {
      config.headers.Authorization = tokenStr
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
//响应拦截器
axios.interceptors.response.use(
  res => {
    if (res.status === 200) {
      return res
    } else {
      return Promise.reject(err)
    }
  },
  err => {
    if(err.response == null) {
      app.config.globalProperties.$toast({
        message: '网络异常，请检查自己的网络',
        position: 'bottom',
      });
      return Promise.reject(err)
    }
    if (err.response.status) { //服务器状态码的异常
      switch (err.response.status) {
        // 403 token过期
        case 403:
          //判断是否在登录界面，如果在登录界面，不显示此提示
          if(window.location.href.indexOf("/login") == -1) {
            app.config.globalProperties.$toast({
              message: '未登录或登录过期，请重新登录',
              position: 'bottom',
            });
            app.config.globalProperties.$router.push("/login/sms")
          }
          break;
        // 404请求不存在
        case 404:
          app.config.globalProperties.$toast({
            message: '网络请求不存在',
            position: 'bottom',
          });
          break;
        case 500:
          app.config.globalProperties.$toast({
            message: '网络异常，请检查自己的网络',
            position: 'bottom',
          });
          break;
        // 其他错误，直接抛出错误提示
        default:
          app.config.globalProperties.$toast({
            message: err.response.statusText,
            position: 'bottom',
          });
      }
      return Promise.reject(err)
    }
  }
)


// app.config.globalProperties.$springbooturl = "https://39.98.73.138:8080"
app.config.globalProperties.$springbooturl = ""
app.config.globalProperties.$domain = "https://39.98.73.138"
app.mount('#app')
