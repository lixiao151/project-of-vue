import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import home from './components/home.vue';
import car from './components/car.vue';
import user from './components/user.vue';
// import alllist from './components/alllist.vue';
import detail from './components/detail.vue';
import fenxiaotest from './components/fenxiaotest.vue';
import order from './components/order.vue';
import pay from './components/pay.vue';
import address from './components/address.vue';
import reg from './components/reg.vue';
import fukuan from './components/fukuan.vue';
import login from './components/login.vue';
import success from './components/success.vue';
import error from './components/error.vue';
// import(组件) 返回 promise import(组件).then(返回组件)
let alllist = () => import('./components/alllist.vue')  //异步加载进来的
let routes=[
    {path:'/home',component:home},
    {path:'/car',component:car},
    {path:'/alllist',component:alllist},
    {path:'/detail/:aid',component:detail},
    {path:'/fenxiaotest',component:fenxiaotest},
    {path:'/order',component:order},
    {path:'/pay',component:pay},
    {path:'/reg',component:reg},
    {path:'/fukuan',component:fukuan},
    {path:'/address',component:address},
    {path:'/user',component:user},
    {path:'/login',component:login},
    {path:'/success',component:success},
    {path:'/',redirect:'home'},
    {path:'*',component:error}
];
export default new Router({
  routes,
  scrollBehavior () {
    // console.log('路由切换',to,from,savedPosition);//savedPosition==上一次当前页面的滚动位置
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 }
  }
})
