import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../components/login-auth/User-login.vue'
import Quiz from '../components/quiz-user/Quiz-user.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: Quiz,
  },
  {
    path: '/quiz/:id',
    name: 'quiz-start',
    component: () => import("../components/quiz-user/Quiz-question.vue"),
  },
  {
    path: '/quiz/info/:id',
    name: 'quiz-info',
    component: () => import("../components/quiz-user/Quiz-info.vue"),
  },
  {
    path: '/quiz/end',
    name: 'quiz-end',
    component: () => import("../components/quiz-user/End-Quiz.vue"),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
