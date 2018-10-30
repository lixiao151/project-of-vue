<template>
<div class="order">
     <header>
      <a href="javascript:history.back(-1)" class="back-off fl"><span class="glyphicon glyphicon-menu-left"></span></a>
      <div class="head-mid">
       <h1>我的订单</h1>
      </div>
     </header>
     <div class="head-top">
      <img src="../assets/images/head.jpg" />
     </div><!--head-top/-->
     
     <div class="zhaieq oredereq">
      <a href="javascript:;" class="zhaiCur">待付款</a>
      <a href="javascript:;">待发货</a>
      <a href="javascript:;">已取消</a>
      <a href="javascript:;" style="background:none;">已完成</a>
      <div class="clearfix"></div>
     </div><!--oredereq/-->
     
     <div class="dingdanlist" v-show="bl2">
      <table>
       <tr>
        <td colspan="2" width="65%">订单号：<strong>PO20150819111145</strong></td>
        <td width="35%" align="right"><div class="qingqu"><a href="javascript:;" class="orange" @click="quxiao2">订单取消</a></div></td>
       </tr>
       <router-link to="/detail" tag="tr" class="dingdanlist" v-show='bl2'>
        <td class="dingimg" width="15%"><img src="../assets/images/pro1.jpg" /></td>
        <td width="50%">
         <h3>三级分销农庄有机瓢瓜400g</h3>
         <time>下单时间：2015-08-11  13:51</time>
        </td>
        <td align="right"><img src="../assets/images/jian-new.png" /></td>
       </router-link>
       <tr>
        <th colspan="3"><strong class="orange">¥36.60</strong></th>
       </tr>
      </table>
     </div><!--dingdanlist/-->
     
      <div class="dingdanlist" v-show="bl1">
      <table>
       <tr>
        <td colspan="2" width="65%">订单号：<strong>PO20150819111145</strong></td>
        <td width="35%" align="right"><div class="qingqu"><a href="javascript:;" class="orange" @click="quxiao1">订单取消</a></div></td>
       </tr>
       <router-link to="/detail" tag="tr" class="dingdanlist" v-show='bl1'>
        <td class="dingimg" width="15%"><img src="../assets/images/pro1.jpg" /></td>
        <td width="50%">
         <h3>三级分销农庄有机瓢瓜400g</h3>
         <time>下单时间：2015-08-11  13:51</time>
        </td>
        <td align="right"><img src="../assets/images/jian-new.png" /></td>
       </router-link>
       <tr>
        <th colspan="3"><strong class="orange">¥36.60</strong></th>
       </tr>
      </table>
      </div>
</div>
</template>
<script>
export default {
    data(){
        return {
            bl1:true,
            bl2:true
        }
    },
    methods:{
        quxiao2(){
            this.bl2=false
        },
        quxiao1(){
            this.bl1=false
        }
    }
}
</script>

<style>
.zhaieq{
	margin:2px 0;
	background:#f1f1f1;	
	}
.zhaieq a{
	float:left;
	width:33.33%;
	height:50px;
	line-height:50px;
	text-align:center;
	font-size:1.4rem;
	color:#a6a6a6;
	background:url('../assets/images/xian.jpg') right center no-repeat;
	}
.zhaieq a:hover{color:#000;}
.zhaieq a.zhaiCur{color:#f60; font-weight:bold;}
.oredereq{ background:#fff;}
.oredereq a{
	width:25%;
	}
.dingdanlist{
	background:#fff;
	margin:12px 0 0 0;
	cursor:default;
	}
.dingdanlist table{width:100%;}
.dingdanlist td{
	padding:10px;
	border-top:#ddd 1px solid;
	border-bottom:#ddd 1px solid;
	}
.dingdanlist td .qingqu{ white-space:normal; }

.dingdanlist td h3{ font-size:1.4rem; font-weight:bold;padding:10px 0;}
.dingdanlist td time{ display:block; font-size:1.2rem;color:#999;}
.dingdanlist th{padding:10px; font-size:1.8rem;color:#f60;border-top:#ddd 1px solid;}
</style>
