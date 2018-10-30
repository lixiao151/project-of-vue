<template>
    <div class="index-pro1">
      <div class="index-pro1-list" v-for="(item,index) of list" :key="index-1+2">
       <dl>
        <!-- <dt><a href="proinfo.html"><img src="../assets/images/pro1.jpg" /></a></dt> -->
        <router-link :to="'/detail/'+(index-1+2) + '?dataName='+dataName" tag="dt"><a href="javascript:;"><img :src="item.img" /></a></router-link>
        <!-- <dd class="ip-text"><a href="proinfo.html">这是产品的名称</a><span>已售：488</span></dd> -->
        <router-link :to="'/detail/'+(index-1+2) + '?dataName='+dataName" tag='dt' class="ip-text"><a href="javascript:;">{{item.name}}</a><span>已售：{{item.xiaoliang}}</span></router-link>
        <dd class="ip-price"><strong>¥{{item.price}}</strong> <span>¥{{item.yuprice}}</span></dd>
       </dl>
      </div>
      
      <div class="clearfix"></div>
     </div>
</template>
<script>
export default {
    props:["list","dataName"]
}
</script>

<style>
.index-pro1{
	padding:5px;
	}
.index-pro1 .index-pro1-list{
	float:left;
	width:50%;
	padding:5px;
	}
.index-pro1 .index-pro1-list dl{
	border:#ddd 1px solid;
	padding:5px;
	}
.index-pro1 .index-pro1-list dt{
	text-align:center
    }
.index-pro1 .index-pro1-list dt img{height:10rem}
.index-pro1 .index-pro1-list .ip-text{
	height:40px;
	line-height:40px;
	font-size:1.4rem;
	border-top:#ddd 2px solid;
	border-bottom:#ddd 1px dotted;
	}
.index-pro1 .index-pro1-list .ip-text span{
	font-size:1.2rem;
	color:#999;
	margin-left:10px;
	}
.index-pro1 .index-pro1-list .ip-price{
	height:30px;
	line-height:30px;
	color:#f60;
	}
.index-pro1 .index-pro1-list .ip-price span{
	color:#999;
	text-decoration:line-through;
	margin-left:10px;
	}
</style>
