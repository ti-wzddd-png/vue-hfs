import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './views/Login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // 将/login重订为/
    { path: '/', redirect: '/login' },
    // 定义login页面的访问路径
    { path: '/login', component: Login }
  ]
})

export default router
