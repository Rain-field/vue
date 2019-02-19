// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'

axios.defaults.headers.common['token'] = "f4c902c9ae5a2a9d8f84868ad064e706"//设置axios请求的token
axios.defaults.headers.post['Content-type'] = "application/json"

Vue.prototype.$axios = axios//在全局中就可以使用this.$axios请求资源

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
