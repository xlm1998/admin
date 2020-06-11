import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () => import('@/views/login/Login.vue')
const Home = () => import('@/views/Home.vue')
const User = () => import('@/views/user/User.vue')
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/user',
        name: 'user',
        component: User
      }
    ],
    meta: {
      isLogin: true
    }
  }, {
    path: '/',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
