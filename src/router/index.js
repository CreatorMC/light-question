import { createRouter, createWebHistory } from "vue-router";
import LoginView from '../views/LoginView.vue';
import SMSLogin from '../components/SMSLogin.vue';
import PasswordLogin from '../components/PasswordLogin.vue';
import IndexViewVue from '../views/IndexView.vue';
import VCodeLogin from '../components/VCodeLogin.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      children: [
        {
          path: "sms",
          name: "SMS",
          component: SMSLogin
        },
        {
          path: "password",
          name: "Password",
          component: PasswordLogin
        },
        {
          path: "vcode",
          name: "vcode",
          component: VCodeLogin
        },
      ]
    },
    {
      path: "/index",
      name: "index",
      component: IndexViewVue
    },
  ],
});

export default router;
