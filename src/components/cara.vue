<template>
<div class="cara">
    <header>
      <a href="javascript:history.back(-1)" class="back-off fl"><span class="glyphicon glyphicon-menu-left"></span></a>
      <div class="head-mid">
       <h1>购物车</h1>
      </div>
     </header>
     <div class="head-top">
      <img src="../assets/images/head.jpg" />
     </div><!--head-top/-->
     <table class="shoucangtab">
      <tr>
       <td width="75%"><span class="hui">购物车共有：<strong class="orange"></strong>件商品</span></td>
       <td width="25%" align="center" style="background:#fff url('../assets/images/xian.jpg') left center no-repeat;">
        <span class="glyphicon glyphicon-shopping-cart" style="font-size:2rem;color:#666;"></span>
       </td>
      </tr>
     </table>
</div>
</template>

<style>
header{
	width:100%;
	padding:0 40px;
	height:40px;
	position:relative;
	background:#f1f1f1;
    }
.head-top{
	position:relative;
	width:100%;
	height:auto;
	}
.back-off{
	position:absolute;
	left:0;
	top:0;
	width:40px;
	height:40px;
	text-align:center;
	line-height:40px;
	font-size:1.4em;
	}
.shoucangtab{
	width:100%;
	}
.shoucangtab td{
	padding:13px;
	background-color:#fff;
	border-bottom:#ddd 1px solid;
	}
</style>

