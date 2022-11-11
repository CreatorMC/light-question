import { createApp } from 'vue'
import { createPinia } from "pinia"
import './style.css'
import App from './App.vue'
import router from "./router"
import axios from "axios"
// Toast
import { showToast } from 'vant';
import 'vant/es/toast/style';

// Dialog
import { showDialog } from 'vant';
import 'vant/es/dialog/style';

// Notify
import { showNotify } from 'vant';
import 'vant/es/notify/style';

// ImagePreview
import { showImagePreview } from 'vant';
import 'vant/es/image-preview/style';

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(showToast)
app.use(showDialog)
app.use(showNotify)
app.use(showImagePreview)
// 全局配置axios
axios.defaults.withCredentials = true
app.config.globalProperties.$axios = axios
app.mount('#app')
