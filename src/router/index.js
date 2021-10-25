/**
 * @Author: 郑钊宇
 * @Date: 2021-10-12 09:06:46
 * @LastEditTime: 2021-10-25 08:12:32
 * @LastEditors: 郑钊宇
 * @Description: 定义路由
 */

 import Vue from 'vue'
 import VueRouter from 'vue-router'
 
 Vue.use(VueRouter)
 
 const routes = [
   {
     path: '/',
     name: 'Home',
     component: () => import('views/home')
   },
   {
    path: '/login',
    name: 'Login',
    component: () => import('views/login')
  },
   {
     path: '/404',
     name: '404',
     component: () => import('components/404')
   },
   {  // 匹配其他不能匹配的路由，必须放在最后
     path: '/*',
     name: '404',
     redirect: '/404'
   }
 ]
 
 const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
 })
 
 export default router
 