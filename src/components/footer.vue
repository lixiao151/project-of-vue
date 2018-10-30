<template>
     <div class="footNav">
      <dl>
       <!-- <a href="index.html">
        <dt><span class="glyphicon glyphicon-home"></span></dt>
        <dd>微店</dd>
       </a> -->
       <router-link to='/home'>
        <dt><span class="glyphicon glyphicon-home"></span></dt>
        <dd>微店</dd>
       </router-link>
      </dl>
      <dl>
       <!-- <a href="prolist.html">
        <dt><span class="glyphicon glyphicon-th"></span></dt>
        <dd>所有商品</dd>
       </a> -->
       <router-link to="/alllist">
         <dt><span class="glyphicon glyphicon-th"></span></dt>
        <dd>所有商品</dd>
       </router-link>
      </dl>
      <!-- <dl>
       <a href="car.html">
        <dt><span class="glyphicon glyphicon-shopping-cart"></span></dt>
        <dd>购物车 </dd>
       </a>
      </dl> -->
      <!-- <router-link to='/car' tag='dl' @click.native="dogo"> -->
      <router-link to='/car' tag='dl'>
        <a href="javascript:;">
        <dt><span class="glyphicon glyphicon-shopping-cart"></span></dt>
        <dd>购物车 </dd>
       </a>
      </router-link>

      <!-- <dl>
       <a href="user.html">
        <dt><span class="glyphicon glyphicon-user"></span></dt>
        <dd>我的</dd>
       </a>
      </dl> -->
      <router-link to='/user' tag='dl'>
       <a href="javascript:;">
        <dt><span class="glyphicon glyphicon-user"></span></dt>
        <dd>我的</dd>
       </a>
      </router-link>
      <div class="clearfix"></div>
     </div>
</template>
<script>
export default {
    // methods:{
    //     dogo(){
    //         this.$root.$data.bNav=false
    //     }
    // }
}
</script>

<style>
.footNav{
	position:fixed;
	left:0;
	bottom:0;
	z-index:9;
	width:100%;
	height:55px;
	border-top:#ddd 1px solid;
	background:#fff url('../assets/images/ftbg.jpg') left bottom repeat-x;
	}
.footNav dl{
	float:left;
	width:25%;
	text-align:center;
	}
.footNav dt{
	height:35px;
	line-height:35px;
	font-size:2rem;
	}
.footNav dd{
	height:20px;
	line-height:20px;
	}
.footNav dl.ftnavCur a{color:#f60;}
</style>
