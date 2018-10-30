<template>
       <div class="head-top">
      <img src="../assets/images/head.jpg" />
      <dl>
       <!-- <dt><a href="user.html"><img src="../assets/images/touxiang.jpg" /></a></dt> -->
       <router-link to='/user' tag='dt'>
        <a href="javascript:;"><img src="../assets/images/touxiang.jpg" /></a>
       </router-link>
       <dd>
        <h1 class="username">{{user}}</h1>
        <ul>
         <!-- <li><a href="prolist.html"><strong>34</strong><p>全部商品</p></a></li> -->
         <router-link to="/alllist" tag="li">
            <a href="javascript:;"><strong>34</strong><p>全部商品</p></a>
         </router-link>
         <li @click="shouc"><a href="javascript:;"><span class="glyphicon glyphicon-star-empty"></span><p>收藏本店</p></a></li>
         <li style="background:none;"><a href="javascript:;"><span class="glyphicon glyphicon-picture"></span><p>二维码</p></a></li>
         <div class="clearfix"></div>
        </ul>
       </dd>
       <div class="clearfix"></div>
      </dl>
     </div>
</template>
<script>
import store from '../store/store.js'
export default {
    data(){
        return {
            user:""
        }
    },
    mounted(){
        this.user=store.state.user
    },
    methods:{
        shouc(){
            document.querySelector(".glyphicon").style.color="red";
            document.querySelector(".glyphicon").nextElementSibling.style.color="red"
        }
    }
}
</script>

<style>
.head-top{
	position:relative;
	width:100%;
	height:auto;
	}
.head-top dl{
	position:absolute;
	left:0;
	bottom:-50px;
	width:100%;
	height:90px;
	padding:5px 10px;
	border-bottom:#ddd 1px solid;
	}
.head-top dt{
	float:left;
	width:20%;
	}
.head-top dt a{
	display:block;
	width:70px;
	height:70px;
	border:#fff 1px solid;	
	}
.head-top dd{
	float:right;
	width:80%;
	padding-left:10px;
	}
.username{
	height:30px;
	line-height:30px;
	color:#fff;
	text-shadow:0 0 2px #000;
	font-size:1.6rem;
	font-weight:bold;
	}
.head-top li{
	float:left;
	width:33.33%;
	font-family:1rem;
	text-align:center;
	background:url('../assets/images/xian0.jpg') right center no-repeat;
	}
.head-top li span{
	display:inline-block;
	height:25px;
	line-height:25px;
	font-size:2rem;
	margin:5px 0 0 0;
	}
.head-top li strong{
	display:inline-block;
	height:25px;
	line-height:25px;
	margin:5px 0 0 0;
	}
.head-top li p{
	font-size:1.2rem;
	color:#666;
	height:20px;
	line-height:20px;
	}
</style>
