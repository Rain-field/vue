import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

// 二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

// 三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'

export const routes = [
    //   {path:'/',name:'homeLink',component:Home},
      {path:'/',name:'homeLink',components:{
          default:Home,//默认会显示这个组件
          'orderingGuide':OrderingGuide,
          'delivery':Delivery,
          'history':History
      }},
      {path:'/menu',name:'menuLink',component:Menu},
      {path:'/admin',name:'adminLink',component:Admin},
      {path:'/about',name:'aboutLink',component:About,redirect:'/about/contact',children:[
        {path:'/about/contact',name:'contactLink',component:Contact,redirect:'/about/contact/personName',children:[
          {path:'/about/contact/phone',name:'phoneLink',component:Phone},
          {path:'/about/contact/personName',name:'personNameLink',component:PersonName},
        ]},
        {path:'/about/delivery',name:'deliveryLink',component:Delivery},
        {path:'/about/history',name:'historyLink',component:History},
        {path:'/about/orderingGuide',name:'orderingGuideLink',component:OrderingGuide}
      ]},
      {path:'/login',name:'loginLink',component:Login},
      {path:'/register',name:'registerLink',component:Register},
      {path:'*',redirect:'/'}//当用户输入错误的路径可以跳转到主页面
    ]