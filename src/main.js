import { createApp } from 'vue'
import { createPinia } from "pinia"
import './style.css'
import App from './App.vue'
import router from "./router"
import axios from "axios"
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
    if(info == null) {
      return config;
    }
    const tokenStr = info.token
    if (tokenStr) {
      config.headers.Authorization = tokenStr
    }
    return config
  })
app.mount('#app')
