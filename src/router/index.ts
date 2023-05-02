import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 首页
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      children: [
        {
          // 首页
          path: '/homes',
          name: 'homes',
          component: () => import('../views/indexView.vue')
        },
        {
          // 会员
          path: '/member',
          name: 'member',
          component: () => import('../views/memberView.vue')
        },
        {
          // 商品
          path: '/goods',
          name: 'goods',
          component: () => import('../views/goodsView.vue')
        },
        {
          // 供应商
          path: '/supplier',
          name: 'supplier',
          component: () => import('../views/supplierView.vue')
        },
        {
          // 员工
          path: '/staff',
          name: 'staff',
          component: () => import('../views/staffView.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    // 登录
    {
      path: '/',
      name: 'login',
      component: () => import('../views/login.vue')
    }
  ]
})
// 全局前置路由守卫
router.beforeEach((to, from, next) => {
  // 获取本地token
  const token = localStorage.getItem('token')
  // 如果去登录页面
  if (to.path == '/') {
    // 有token不允许去登录页面
    if (token) {
      return next('/home')
    } else {
      // 没有toekn跳转登录页面
      return next()
    }
  }
  if (token) {
    next() // 有token放行
  } else {
    next('/') // 没有返回登录页面
  }
})
export default router
