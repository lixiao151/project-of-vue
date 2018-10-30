<template>
  <div id="app">
    <div id="nav">
     <transition
      enter-active-class="animated fadeIn"
    >
      <router-view></router-view>
    </transition>
    <loading v-show='bLoading'></loading>
    <footbar v-show="bFoot"></footbar>
    </div>
  </div>
</template>
<script>    
// 根组件
import footbar from './components/footer'
import {mapGetters} from 'vuex';   //将vuex对象中的mapGaptters解构出来
import * as types from './store/types';  //引入types 
export default {
    components:{
       footbar
    },
   watch:{
       $route:{//路由监听
      handler(){
        // console.log(this.$route)  //不变动路径
        let path=this.$route.path; 
        if(/home|alllist|address|fenxiao|fukuan|order|success/.test(path)){
          this.$store.dispatch(types.VIEW_FOOT,true);
        }
        if(/car|detail|pay/.test(path)){
          this.$store.dispatch(types.VIEW_FOOT,false);
        }
        if(/user/.test(path)){
          this.$store.dispatch(types.VIEW_FOOT,true);
        }
      },
      immediate:true
    }
  },
  computed:mapGetters([
    'bFoot','bLoading'
  ])
};
</script>

<style>
</style>
