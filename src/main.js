import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/base_style.scss'
import './assets/scss/style.scss'
import './assets/scss/calculation.scss'
import './assets/icon/iconfont.css'

import http from './network/http'
Vue.prototype.$http = http

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  // mode: 'history',
  render: h => h(App)
}).$mount('#app')
