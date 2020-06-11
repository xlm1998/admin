import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入公用css样式
import '@/common/reset.css'
// 全局引入elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false
// 全局路由验证
router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.meta.isLogin) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/')
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
