import { createRouter, createWebHistory } from "vue-router";
import LoginView from '../views/LoginView.vue';
import SMSLogin from '../components/SMSLogin.vue';
import PasswordLogin from '../components/PasswordLogin.vue';
import IndexViewVue from '../views/IndexView.vue';
import VCodeLogin from '../components/VCodeLogin.vue';
import IndexTitle from '../components/IndexTitle.vue'
import IndexAnswer from '../components/IndexAnswer.vue';
import IndexHome from '../views/IndexHome.vue';
import IndexBook from '../views/IndexBook.vue';
import { isSimpleIdentifier } from "@vue/compiler-core";
import IndexMine from '../views/IndexMine.vue'
import IndexJianghu from '../views/IndexJianghu.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/index/home"
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
      component: IndexViewVue,
      children: [
        {
          path: "",
          name: "auto",
          redirect: "/index/home"
        },
        {
          path: "home",
          name: "Home",
          component: IndexHome
        },
        {
          path: "book",
          name: "Book",
          component: IndexBook
        },
        {
          path: "mine",
          name: "Mine",
          component: IndexMine
        },
        {
          path: "jianghu",
          name: "Jianghu",
          component: IndexJianghu
        },
      ]
    },
    {
      path: "/Indextitle",
      name: "IndexTitle",
      component: IndexTitle
    },
    {
      path: "/Indexanswer",
      name: "IndexAnswer",
      component: IndexAnswer
    },
  ],
});

export default router;
