<template>
    <div class="maincont">
     <header>
      <a href="javascript:history.back(-1)" class="back-off fl"><span class="glyphicon glyphicon-menu-left"></span></a>
      <div class="head-mid">
       <h1>分销申请</h1>
      </div>
     </header>
     <div class="head-top">
      <img src="../assets/images/head.jpg" />
     </div><!--head-top/-->
     <div class="fenxiao">
      <div class="fen-text1">欢迎加入<span class="f60">三级分销</span>，请填写申请信息！</div>
      <div class="fen-text1">邀请人：<span class="f60">王大力</span>(请核对)</div>
      <form action="#" method="get" class="fenxiaoinput">
       <input type="text" placeholder="请填写真实姓名，用于佣金结算" />
       <input type="text" placeholder="请填写手机号码方便联系" />
       <input type="submit" value="申请成为分销商" class="fensub" />
      </form>
      <div class="fen-text1">分销商特权</div>
      <div class="fen-list">
       <dl>
        <dt><img src="../assets/images/fen1.jpg" /></dt>
        <dd>
         <h3>独立微店</h3>
         <p>拥有自己的微店及推广二维码；</p>
        </dd>
        <div class="clearfix"></div>
       </dl>
       <dl>
        <dt><img src="../assets/images/fen2.jpg" /></dt>
        <dd>
         <h3>销售拿佣金</h3>
         <p>微店卖出商品，您可以获得佣金；</p>
        </dd>
        <div class="clearfix"></div>
       </dl>
      </div>
     </div>
     <footbar></footbar>
    </div>
</template>
<script>
  import footbar from './footer.vue';
export default {
    components:{
        footbar
    }
}
</script>
>
<style>
.fenxiao{
	padding:20px 10px;
	}
.fenxiaoinput input{
	margin:5px 0;
	border:#ddd 1px solid;
	background:#fff;
	padding-left:5px;
	height:35px;
	line-height:35px;
	width:100%;
	-moz-border-radius: 3px;      /* Gecko browsers */
    -webkit-border-radius: 3px;   /* Webkit browsers */
    border-radius:3px;            /* W3C syntax */
	}
.fenxiaoinput .fensub{
	margin:0;
	padding:0;
	background:none;
	border:0;
	width:100%;
	height:35px;
	line-height:35px;
	background:#f60;
	color:#fff;
	margin-bottom:15px;
	}

.fen-list dl{
	padding:10px 0;
	}
.fen-list dt{
	float:left;
	width:10%;
	padding:5px 0;
	}
.fen-list dd{
	float:left;
	width:90%;
	}
.fen-list dd h3{ font-size:1.4rem; height:25px; line-height:25px;}
.fen-list dd p{ font-size:1.2rem;color:#999;}
</style>

