import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Vant, { Lazyload } from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible/flexible'
import * as statusCode from './request/statusCode'
import http from './request'

Vue.use(Vant)
Vue.use(Lazyload, {
  lazyComponent: true
})
NProgress.inc(0.2)
NProgress.configure({
  easing: 'ease',
  speed: 500,
  showSpinner: false
})
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

Vue.prototype.$http = http
Vue.prototype.$statusCode = statusCode

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
