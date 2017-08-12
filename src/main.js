import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// 引入自定义主题
import './assets/custom-theme/index.css'

import App from './App.vue'
import axios from 'axios'
import NProgress from 'nprogress' // progress
import 'nprogress/nprogress.css';// Progress 进度条 样式
// // 引入 map
// import china from './vendor/china'



import router from './router/'

Vue.use(ElementUI)
Vue.use(router);


router.beforeEach((to, from, next) => {
  NProgress.start(); 
  next();
});

router.afterEach(() => {
  NProgress.done(); // 结束Progress
});


new Vue({
    el: '#app',
    router,
    render: h => h(App)
})