// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import './css/app.css' 
import './css/iconfont.css'
import appjs from './appjs'
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.prototype.axios = axios
Vue.prototype.$app=appjs
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
