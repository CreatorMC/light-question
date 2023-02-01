import { createRouter, createWebHistory } from "vue-router";
import LoginView from '../views/LoginView.vue';
import LoginSMS from '../components/LoginSMS.vue';
import LoginPassword from '../components/LoginPassword.vue';
import LoginRegister from '../components/LoginRegister.vue';
import LoginRegisterVCode from '../components/LoginRegisterVCode.vue';
import IndexViewVue from '../views/IndexView.vue';
import LoginVCode from '../components/LoginVCode.vue';
import IndexHome from '../views/IndexHome.vue';
import IndexBook from '../views/IndexBook.vue';
import IndexMine from '../views/IndexMine.vue';
import IndexJianghu from '../views/IndexJianghu.vue';
import QuestionView from '../views/QuestionView.vue';
import QuestionAnswerView from '../views/QuestionAnswerView.vue';
import QuestionFinishView from '../views/QuestionFinishView.vue';
import MineFeedbackAndHelp from '../views/MineFeedbackAndHelp.vue';
import MineFeedback from '../views/MineFeedback.vue';
import MineSet from '../views/MineSet.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/index/home",
      meta: {
        index: 1
      }
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: {
        index: 1
      },
      children: [
        {
          path: "sms",
          name: "SMS",
          component: LoginSMS,
          meta: {
            index: 1
          }
        },
        {
          path: "password",
          name: "Password",
          component: LoginPassword,
          meta: {
            index: 1
          }
        },
        {
          path: "register",
          name: "Register",
          component: LoginRegister,
          meta: {
            index: 1
          }
        },
        {
          path: "registerVCode",
          name: "RegisterVCode",
          component: LoginRegisterVCode,
          meta: {
            index: 1
          }
        },
        {
          path: "vcode",
          name: "vcode",
          component: LoginVCode,
          meta: {
            index: 1
          }
        },
        
      ]
    },
    {
      path: "/index",
      name: "index",
      meta: {
        index: 1
      },
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
          component: IndexHome,
          meta: {
            index: 1
          }
        },
        {
          path: "book",
          name: "Book",
          component: IndexBook,
          meta: {
            index: 1
          }
        },
        {
          path: "mine",
          name: "Mine",
          component: IndexMine,
          meta: {
            index: 1
          }
        },
        {
          path: "jianghu",
          name: "Jianghu",
          component: IndexJianghu,
          meta: {
            index: 1
          }
        },
      ]
    },
    {
      path: "/question",
      name: "Question",
      component: QuestionView,
      meta: {
        index: 2
      }
    },
    {
      path: "/questionAnswer",
      name: "QuestionAnswer",
      component: QuestionAnswerView,
      meta: {
        index: 3
      }
    },
    {
      path: "/questionFinish",
      name: "QuestionFinish",
      component: QuestionFinishView,
      meta: {
        index: 4
      }
    },
    {
      path: "/mineFeedbackAndHelp",
      name: "MineFeedbackAndHelp",
      component: MineFeedbackAndHelp,
      meta: {
        index: 2
      }
    },
    {
      path: "/Mineset",
      name: "MineSet",
      component: MineSet,
      meta: {
        index: 3
      }
    },
    {
      path: "/MineFeedback",
      name: "MineFeedback",
      component: MineFeedback,
      meta: {
        index: 3
      }
    },
  ],
});

export default router;
