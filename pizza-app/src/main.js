import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
// import Home from './components/Home'
// import Menu from './components/Menu'
// import Admin from './components/Admin'
// import About from './components/about/About'
// import Login from './components/Login'
// import Register from './components/Register'

// // 二级路由
// import Contact from './components/about/Contact'
// import Delivery from './components/about/Delivery'
// import History from './components/about/History'
// import OrderingGuide from './components/about/OrderingGuide'

// // 三级路由
// import Phone from './components/about/contact/Phone'
// import PersonName from './components/about/contact/PersonName'

import { routes } from './router'

Vue.use(Router)

const router = new Router({
  routes,
// routes:[
//   // {path:'/',component:Home},
//   // {path:'/menu',component:Menu},
//   // {path:'/admin',component:Admin},
//   // {path:'/about',component:About},
//   // {path:'/login',component:Login},
//   // {path:'/register',component:Register},

//   {path:'/',name:'homeLink',component:Home},
//   {path:'/menu',name:'menuLink',component:Menu},
//   {path:'/admin',name:'adminLink',component:Admin},
//   // 路由独享守卫
//   // {path:'/admin',name:'adminLink',component:Admin,beforeEnter:(to,from,next) => {
//   //   // alert("非登录状态下不能访问此页面！");
//   //   // next();//能够正常跳转到当前页面
//   //   // next(false);//不能
//   //   if(to.path == '/login' || to.path == '/register'){
//   //     next();
//   //   }else{
//   //     alert('还没有登录，请先登录！');
//   //     next('/login');
//   //   }
//   // }},
//   {path:'/about',name:'aboutLink',component:About,redirect:'/about/contact',children:[
//     {path:'/about/contact',name:'contactLink',component:Contact,redirect:'/about/contact/personName',children:[
//       {path:'/about/contact/phone',name:'phoneLink',component:Phone},
//       {path:'/about/contact/personName',name:'personNameLink',component:PersonName},
//     ]},
//     {path:'/about/delivery',name:'deliveryLink',component:Delivery},
//     {path:'/about/history',name:'historyLink',component:History},
//     {path:'/about/orderingGuide',name:'orderingGuideLink',component:OrderingGuide}
//   ]},
//   {path:'/login',name:'loginLink',component:Login},
//   {path:'/register',name:'registerLink',component:Register},
//   {path:'*',redirect:'/'}//当用户输入错误的路径可以跳转到主页面
// ],
mode:'history',
scrollBehavior (to, from, savedPosition) {
  // return {x:0, y:100}//相当于当前页面margin-top:100，从高度为100px开始显示
  // return { selector: '.btn'}//直接展示指定选择器,会展示组件中第一个.btn元素
  if(savedPosition){
    return savedPosition
  }else{
    return {x:0, y:0}
  }
}
})

// 全局守卫
// router.beforeEach((to,from,next) => {
//   // alert('还没有登录，请先登录！');
//   // next()//可以跳转到点击页面
//   // console.log(to,from);

//   // 判断如果点击的是登录和注册页面则执行，否则将其引导至登录界面
//   if(to.path == '/login' || to.path == '/register'){
//     next();
//   }else{
//     alert('还没有登录，请先登录！');
//     next('/login');
//   }
// }) 

// 后置钩子
// router.afterEach((to,from) => {
//   alert('after each');  
// })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
