<template>
    <div class="carb">
     <div class="dingdanlist">
      <table>
       <tr>
        <td width="100%" colspan="4"><a href="javascript:;"><input type="checkbox" name="1" /> 全选</a></td>
       </tr>
       <tr v-for='(item,index) of buycar' :key="index">
        <td width="4%"><input type="checkbox" name="1" /></td>
        <td class="dingimg" width="30%"><img :src='item.img'/></td>
        <td width="50%">
         <h3>￥{{item.price}}</h3>
         <time>下单时间：2015-08-11  13:51</time>
        </td>
        <td align="right" width="20%"><input type="number" value="1" class='spinnerExample'></td>
       </tr>
       <tr>
        <th colspan="4"><strong class="orange"></strong></th>
       </tr>
      </table>
     </div><!--dingdanlist/-->
    <div class="height1"></div>
     <div class="gwcpiao">
     <table>
      <tr>
       <th width="10%"><a href="javascript:history.back(-1)"><span class="glyphicon glyphicon-menu-left"></span></a></th>
       <td width="50%">总计：<strong class="orange">2999</strong></td>
       <td width="40%"><router-link to="/pay" class="jiesuan">去结算</router-link></td>
       <!-- <td width="40%"><a href="pay.html" class="jiesuan">去结算</a></td> -->
      </tr>
     </table>
    </div>
     </div>
</template>
<script>
  import {mapActions,mapGetters} from 'vuex';
  export default{
    computed:mapGetters([
      'buycar'
    ]),
    methods:mapActions([
      'changeItem','removeItem','clearBuycar'
    ])
  }
</script>
<style scoped>
.spinnerExample{width:4rem}
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
  
</style>

