// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import axios from 'axios';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import Router from './router';
import VueParticles from 'vue-particles'  

Vue.config.productionTip = false

Vue.prototype.$axios = axios;

Vue.use(VueRouter);
Vue.use(iView);
Vue.use(VueParticles) 

const router = new VueRouter({
  mode:"history",
  routes: Router
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router: router,
  template: '<App/>'
})
