import { createRouter, createWebHistory } from "vue-router";
import LoginView from '../views/LoginView.vue';
import SMSLogin from '../components/SMSLogin.vue';
import PasswordLogin from '../components/PasswordLogin.vue';
import IndexViewVue from '../views/IndexView.vue';
import VCodeLogin from '../components/VCodeLogin.vue';
import IndexHome from '../views/IndexHome.vue';
import IndexBook from '../views/IndexBook.vue';
import IndexMine from '../views/IndexMine.vue';
import IndexJianghu from '../views/IndexJianghu.vue';
import QuestionView from '../views/QuestionView.vue';
import QuestionAnswerView from '../views/QuestionAnswerView.vue';
import QuestionFinishView from '../views/QuestionFinishView.vue';
import MineFeedbackAndHelp from '../views/MineFeedbackAndHelp.vue';
import MineFeedback from '../views/MineFeedback.vue';

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
          component: SMSLogin,
          meta: {
            index: 1
          }
        },
        {
          path: "password",
          name: "Password",
          component: PasswordLogin,
          meta: {
            index: 1
          }
        },
        {
          path: "vcode",
          name: "vcode",
          component: VCodeLogin,
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
