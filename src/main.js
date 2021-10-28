/**
 * @Author: 郑钊宇
 * @Date: 2021-10-12 08:42:29
 * @LastEditTime: 2021-10-26 09:24:50
 * @LastEditors: 郑钊宇
 * @Description: 
 */

import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
// import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
