<template>
 <div class="home">
     <navbar></navbar>
     <search></search>
     <banner></banner>
     <list1></list1>
     <list2 :list="list" :dataName="'home'"></list2>
     <!-- <list3></list3> -->
     <fenxiao></fenxiao>
     <!-- <footbar></footbar> -->
 </div>
</template>
<script>
import navbar from './header';
import search from "./search";
import banner from "./banner";
import list1 from "./list1";
import list2 from "./list2";
// import list3 from "./list3";
import fenxiao from './fenxiao';
import Vue from 'vue'
export default {
    components:{
        search,banner,list1,list2,fenxiao,navbar
    },
    data(){
        return {
            list:[]
        }
    },
    mounted(){
        // console.log(1,this.$axios)
        // console.log(2,Vue.axios)
        // console.log(3,axios)
        this.$axios({
            url:'http://localhost:3000/data',
        }).then(
            // res=>console.log("hh",res.data)
            res=>this.list=res.data
        )
    }
}
</script>
