/**
 * @Author: 郑钊宇
 * @Date: 2021-10-12 08:42:29
 * @LastEditTime: 2021-11-16 19:30:35
 * @LastEditors: 郑钊宇
 * @Description: 
 */

import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import $ from 'jquery'
Vue.prototype.$ = $

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'font-awesome/css/font-awesome.min.css'

// axios引用
import axios from 'axios';
Vue.prototype.$axios=axios;
// axios.defaults.baseURL ='http://localhost:5000/api/v1';
axios.defaults.baseURL ='/api/v1';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
