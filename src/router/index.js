import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/student-data',
      name: 'studentdata',
      component: HomeView,
    },
    {
      path: '/sign-up',
      name: 'signup',
      component: Signup,
    }
  ],
})

export default router
