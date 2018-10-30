<template>
    <div class="search-h">
      <form action="#" method="get" class="search">
      <input type="text" class="seaText fl" />
      <!-- <input type="button" value="搜索" class="seaSub fr"/> -->
       <router-link to="/alllist" tag='input' type="button" value="搜索" class="seaSub fr"></router-link> 
     </form>
     <ul class="reg-login-click">
      <!-- <li><a href="login.html">登录</a></li> -->
      <router-link tag="li" to="/login"><a href="javascript:;">登录</a></router-link>
      <router-link tag="li" to="/reg"><a href="javascript:;">注册</a></router-link>
      <!-- <li><a href="reg.html" class="rlbg">注册</a></li> -->
      <div class="clearfix"></div>
     </ul>
    </div>
</template>

<script>
export default {
  
}
</script>
<style>
.search{
	margin:50px 0 0 0;
	width:100%;
	height:50px;
	padding:10px;
	}
.search input{
	border:0;
	background:none;
	margin:0;
	padding:0;
	}
.search .seaText{
	width:80%;
	height:30px;
	line-height:30px;
	border:#ddd 1px solid;
	-moz-border-radius: 3px;      /* Gecko browsers */
    -webkit-border-radius: 3px;   /* Webkit browsers */
    border-radius:3px;            /* W3C syntax */
	background:#f1f1f1;
	}
.search .seaSub{
	width:18%;
	height:30px;
	line-height:30px;
	-moz-border-radius: 3px;      /* Gecko browsers */
    -webkit-border-radius: 3px;   /* Webkit browsers */
    border-radius:3px;            /* W3C syntax */
	background:#f60;
	color:#fff;
    }
.reg-login-click{padding:0 5px 10px 5px;}
.reg-login-click li{
	width:50%;
	padding:0 5px;
	float:left;
	}
.reg-login-click li a{
	display:block;
	width:100%;
	height:35px;
	line-height:35px;
	text-align:center;
	background:#f60;
	color:#fff;
	}
.reg-login-click li a.rlbg{
	background:#06F;
	}
</style>

