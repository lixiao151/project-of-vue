<template>
  <div class="banner">
    <ul class="clearfix">
      <li><img src="../assets/images/image1.jpg" alt=""/>
      </li>
      <li><img src="../assets/images/image2.jpg" alt=""/>
      </li>
      <li><img src="../assets/images/image3.jpg" alt=""/>
      </li>
    </ul>
  </div>   
</template>
<script>
    import $ from 'jquery';
    import Swipe from '../assets/js/swipe.js';
    console.log("HHH",$)
    export default {
    mounted(){
     var mySwipe=new Swipe($('.banner')[0],{
        auto:2000,
        continuous:true,
        stopPropation:true,
       
      })
    }
    }
</script>
<style>
.banner{ margin-top:0.6rem;position: relative;overflow: hidden; z-index: 1}
.banner ul li{float:left;position: relative;}
.banner ul li img{width:100%; display:block;}
</style>
