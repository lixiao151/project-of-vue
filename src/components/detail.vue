<template>
   <div class="maincont">
     <header>
      <a href="javascript:history.back(-1)" class="back-off fl"><span class="glyphicon glyphicon-menu-left"></span></a>
      <div class="head-mid">
       <h1>产品详情</h1>
      </div>
     </header>
     <div class="height2"></div>
     <h3 class="proTitle">商品规格</h3>
     <ul class="guige">
      <li class="guigeCur"><a href="javascript:;">500ML</a></li>
      <li><a href="javascript:;">1000ML</a></li>
      <li><a href="javascript:;">1500ML</a></li>
      <li><a href="javascript:;">2000ML</a></li>
      <li><a href="javascript:;">3000ML</a></li>
      <div class="clearfix"></div>
     </ul><!--guige/-->
     <div class="height2"></div>
     <div class="zhaieq">
      <a href="javascript:;" class="zhaiCur">商品简介</a>
      <a href="javascript:;">商品参数</a>
      <a href="javascript:;" style="background:none;">订购列表</a>
      <div class="clearfix"></div>
     </div><!--zhaieq/-->
     <div class="proinfoList">
      <img :src="detail.img" width="636" height="822" />
     </div><!--proinfoList/-->
    
     <table class="jrgwc">
      <tr>
       <th>
        <router-link to="/home"><span class="glyphicon glyphicon-home"></span></router-link>
        <!-- <a href="index.html"><span class="glyphicon glyphicon-home"></span></a> -->
       </th>
       <td><router-link to="/car" @click.native="addItem(detail)"><h4>加入购物车</h4></router-link></td>
       <!-- <td><a href="car.html"><h4>加入购物车</h4></a></td> -->
      </tr>
     </table>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    data(){
        return {
            detail:{}
        }
    },
    components:{
        // banner
    },
    mounted(){
        let dataName=this.$route.query.dataName;
        let id = this.$route.params.aid;
        this.$axios({
            url:'/data/de_'+dataName+'.json',
        }).then(
            res=>this.detail=res.data[id-1]
        )
       
    },
     methods:mapActions([
      'addItem'
    ])
}
</script>
<style scoped>

.guige{
	border-bottom:#ddd 1px solid;
	padding:5px 0;
	}
.guige li{
	float:left;
	width:50%;
	padding:5px;	
	}
.guige li a{
	display:block;
	height:40px;
	width:100%;
	text-align:center;
	line-height:38px;
	border:#ddd 1px solid;
	}
.guige li a:hover,.guige li.guigeCur a{
	border:#f60 1px solid;
	color:#f60;
	}
.proinfoList{
	padding:10px 5px;
	min-height:300px;
	/* display:none; */
	}
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

.jia-len{width:100%;margin:10px 0 0 0;}
.jia-len td{padding:15px 5px; border-bottom:#ddd 1px solid;border-top:#ddd 1px solid;}
.jia-len th{ border-bottom:#ddd 1px solid; font-size:1.6rem;border-top:#ddd 1px solid;padding:15px 5px;}
.proTitle{ height:37px; border-top:#ddd 1px solid;border-bottom:#ddd 1px solid; line-height:35px; font-size:1.4rem;padding-left:10px;}
</style>

