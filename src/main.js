import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'

Vue.config.productionTip = false
import './assets/css/public.css';
import './assets/css/bootstrap-theme.css';
import './assets/css/bootstrap.css';
import './assets/css/response.css';
import './assets/css/response2.css';
// import './assets/js/style'
import router from './router';
import loading from './components/loading/index.js';  //引入自定义插件   Vue.use()就是:安装
import store from './store/store';
import 'animate.css';
Vue.use(loading);
new Vue({
  router,
  store,    // 放在根实例的功能。，全局组件可用
  render: h => h(App)
}).$mount('#app')
