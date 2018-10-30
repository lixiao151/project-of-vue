//插件 函数 对象   类
import loading from './components/loading.vue';

/* 
export default {
  install:function(Vue){
    // console.log('install');
    // Vue.component('组件名',组件变量名);
    // Vue.component('router-link',RouterLink);
    Vue.component('loading',loading);
  }
} */


export default (Vue)=>{
  Vue.component('loading',loading);
}