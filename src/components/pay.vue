<template>
     <div class="pay">
        <header>
        <a href="javascript:history.back(-1)" class="back-off fl"><span class="glyphicon glyphicon-menu-left"></span></a>
        <div class="head-mid">
        <h1>支付页面</h1>
        </div>
        </header>
        <div class="head-top">
        <img src="../assets/images/head.jpg" />
        </div><!--head-top/-->
        <div class="dingdanlist">
        <table>
        <router-link to='/address' tag="tr">
            <td class="dingimg" width="75%" colspan="2">新增收货地址</td>
            <td align="right"><img src="../assets/images/jian-new.png" /></td>
        </router-link>
        <tr><td colspan="3" style="height:10px; background:#efefef;padding:0;"></td></tr>
        <tr>
            <td class="dingimg" width="75%" colspan="2">选择收货时间</td>
            <td align="right"><img src="../assets/images/jian-new.png" /></td>
        </tr>
        <tr><td colspan="3" style="height:10px; background:#efefef;padding:0;"></td></tr>
        <tr>
            <td class="dingimg" width="75%" colspan="2">支付方式</td>
            <td align="right"><span class="hui">网上支付</span></td>
        </tr>
        <tr><td colspan="3" style="height:10px; background:#efefef;padding:0;"></td></tr>
        <tr>
            <td class="dingimg" width="75%" colspan="2">优惠券</td>
            <td align="right"><span class="hui">无</span></td>
        </tr>
        <tr><td colspan="3" style="height:10px; background:#efefef;padding:0;"></td></tr>
        <tr>
            <td class="dingimg" width="75%" colspan="2">是否需要开发票</td>
            <td align="right"><a href="javascript:;" class="orange">是</a> &nbsp; <a href="javascript:;">否</a></td>
        </tr>
        <tr>
            <td class="dingimg" width="75%" colspan="2">发票抬头</td>
            <td align="right"><span class="hui">个人</span></td>
        </tr>
        <tr>
            <td class="dingimg" width="75%" colspan="2">发票内容</td>
            <td align="right"><a href="javascript:;" class="hui">请选择发票内容</a></td>
        </tr>
        <tr><td colspan="3" style="height:10px; background:#fff;padding:0;"></td></tr>
        <tr>
            <td class="dingimg" width="75%" colspan="3">商品清单</td>
        </tr>
        
        <tr>
            <td class="dingimg" width="15%"><img src="../assets/images/image2.jpg" /></td>
            <td width="50%">
            <h3>三级分销农庄有机瓢瓜400g</h3>
            <time>下单时间：2015-08-11  13:51</time>
            </td>
            <td align="right"><span class="qingdan">X 1</span></td>
        </tr>
        <tr>
            <th colspan="3"><strong class="orange">¥36.60</strong></th>
        </tr>
        <tr>
            <td class="dingimg" width="15%"><img src="../assets/images/image2.jpg" /></td>
            <td width="50%">
            <h3>三级分销农庄有机瓢瓜400g</h3>
            <time>下单时间：2015-08-11  13:51</time>
            </td>
            <td align="right"><span class="qingdan">X 1</span></td>
        </tr>
        <tr>
            <th colspan="3"><strong class="orange">¥36.60</strong></th>
        </tr>
        
        <tr>
            <td class="dingimg" width="75%" colspan="2">商品金额</td>
            <td align="right"><strong class="orange">¥68.80</strong></td>
        </tr>
        <tr>
            <td class="dingimg" width="75%" colspan="2">折扣优惠</td>
            <td align="right"><strong class="green">¥0.00</strong></td>
        </tr>
        <tr>
            <td class="dingimg" width="75%" colspan="2">抵扣金额</td>
            <td align="right"><strong class="green">¥0.00</strong></td>
        </tr>
        <tr>
            <td class="dingimg" width="75%" colspan="2">运费</td>
            <td align="right"><strong class="orange">¥20.80</strong></td>
        </tr>
        </table>
        </div><!--dingdanlist/-->
        <div class="height1"></div>
        <div class="gwcpiao">
        <table>
        <tr>
        <th width="10%"><a href="javascript:history.back(-1)"><span class="glyphicon glyphicon-menu-left"></span></a></th>
        <td width="50%">总计：<strong class="orange">¥69.88</strong></td>
        <!-- <td width="40%"><a href="success.html" class="jiesuan">提交订单</a></td> -->
        <router-link to="/success" tag="td"><a href="javascript:;" class="jiesuan">提交订单</a></router-link>
        </tr>
        </table>
        </div>
    </div>

</template>
<style>
.gwcpiao{
	position:fixed;
	width:100%;
	left:0;
	bottom:0;
	background:#fff;	
	}
.gwcpiao table{width:100%;}
.gwcpiao th{
	padding:5px 0;
	text-align:center;
	font-size:2rem;
	border:#ddd 1px solid;
	}
.gwcpiao td{
	font-size:1.4rem;
	background:#fff;
	border:#ddd 1px solid;
	padding:5px 10px;
    }
.jiesuan{
	display:block;
	width:100%;
	height:40px;
	text-align:center;
	line-height:40px;
	font-size:1.6rem;
	color:#fff;
	background:#ff701e;
	-moz-border-radius: 4px;      /* Gecko browsers */
    -webkit-border-radius: 4px;   /* Webkit browsers */
    border-radius:4px;            /* W3C syntax */
	}
.jiesuan:hover{
	background:#f00;
	color:#fff;
	}
</style>
