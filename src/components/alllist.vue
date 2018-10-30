<template>
    <div class='alllist'>
    <header>
      <a href="javascript:history.back(-1)" class="back-off fl"><span class="glyphicon glyphicon-menu-left"></span></a>
      <div class="head-mid">
       <form action="#" method="get" class="prosearch"><input type="text" /></form>
      </div>
     </header>
     <ul class="pro-select">
      <li class="pro-selCur"><a href="javascript:;">新品</a></li>
      <li><a href="javascript:;">销量</a></li>
      <li><a href="javascript:;">价格</a></li>
     </ul>
     <list2 :list="list" :dataName="'alllist'"></list2>
    </div>
    
</template>
<script>
import list2 from './list2'
export default {
    components:{
        list2
    },
    data(){
        return {
            list:[]
        }
    },
    mounted(){
        axios({
            url:"http://localhost:3000/data1"
        }).then(
            res=>this.list=res.data
        )
    }
}
</script>

<style>
header{
	width:100%;
	padding:0 40px;
	height:40px;
	position:relative;
	background:#f1f1f1;
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
.head-mid{
	width:100%;
	}
.head-mid h1{
	font-size:1.6rem;
	text-align:center;
	height:40px;
	line-height:40px;
	}
.prosearch{
	padding:5px 0;
	}
.prosearch input{
	margin:0;
	padding:0;
	width:100%;
	height:30px;
	line-height:30px;
	background:#ddd;
	border:#ccc 1px solid;
	-moz-border-radius: 3px;      /* Gecko browsers */
    -webkit-border-radius: 3px;   /* Webkit browsers */
    border-radius:3px;            /* W3C syntax */
	padding-left:5px;
	}
.pro-select{
	width:100%;
	height:30px;
	margin:10px 0px;
	border:#ddd 1px solid;
	-moz-border-radius: 3px;      /* Gecko browsers */
    -webkit-border-radius: 3px;   /* Webkit browsers */
    border-radius:3px;            /* W3C syntax */
	overflow:hidden;
	}
.pro-select li{
	float:left;
	width:33.33%;
	border-right:#ddd 1px solid;
	}
.pro-select li a{ 
    display:block;
	width:100%;
	text-align:center;
	height:30px;
	line-height:30px;
}
.pro-select li.pro-selCur a{
	background:#f60;
	color:#fff;
	}
</style>

