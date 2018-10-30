<template>
<div class="reg">
    <header>
      <a href="javascript:history.back(-1)" class="back-off fl"><span class="glyphicon glyphicon-menu-left"></span></a>
      <div class="head-mid">
       <h1>会员注册</h1>
      </div>
     </header>
     <div class="head-top">
      <img src="../assets/images/head.jpg" />
     </div><!--head-top/-->
     <form action="login.html" method="get" class="reg-login">
      <h3>已经有账号了？点此<router-link to='/login' class="orange">登陆</router-link></h3>
      <!-- <h3>已经有账号了？点此<a class="orange" href="login.html">登陆</a></h3> -->
      <div class="lrBox">
       <div class="lrList"><input type="text" placeholder="输入手机号码或者邮箱号" v-model="username"/></div>
       <div class="lrList"><input type="text" placeholder="设置新密码（6-18位数字或字母）" v-model="password"/></div>
      </div><!--lrBox/-->
      <div class="lrSub">
       <!-- <input  value="立即注册" @click="reg"/> -->
       <router-link to="/login" tag="input" value="立即注册" @click.native="reg" ></router-link>
      </div>
     </form>
</div>
</template>
<script>
export default {
     data(){
      return{
        username:'',
        password:''
      }
    },
    methods:{
        reg(){
            this.axios({
                url:'http://localhost:3000/reg',
                 params:{                        //发送数据  默认get方式  params
                    username:this.username,
                    password:this.password,
                },
                }).then((res)=>{
          console.log('访问login接口后',res.data);
        //   if(res.data.error==0){
        //     //路由跳转
        //     console.log('成功可以跳转了');
        //     //存到状态管理，或者直接跳转到user,或者传数据给user
        //     // this.$router.push({path:'/user',params:{},query:{}})
        //   }
        })
    

          }
    }
}
</script>

<style>
.lrBox{
	padding:0 8px;
	background:#fff;
	}
.lrBox input,.lrBox select{
	border:0;
	padding:0;
	margin:0;
	height:45px;
	line-height:45px;
	background:none;
	}
.lrList{border-bottom:#ddd 1px solid;}
.lrList input,.lrBox select{
	width:100%;
	}
.lrBox select{ color:#A9A9A9;}
.lrList2{
	border-bottom:#ddd 1px solid;
	height:46px;
	}
.lrList2 input{
	float:left;
	width:70%;
	}
.lrList2 button{
	float:right;
	border:0;
	padding:0;
	margin:0;
	margin:3px 0;
	width:28%;
	height:38px;
	line-height:38px;
	background:#f60;
	color:#fff;
	-moz-border-radius: 4px;      /* Gecko browsers */
    -webkit-border-radius: 4px;   /* Webkit browsers */
    border-radius:4px;            /* W3C syntax */
	}
.lrList2 button:hover,.lrSub input:hover,.lrSub a:hover{ background:#f60;}
.lrSub{
	padding:20px 10px;
	}
.lrSub input,.lrSub a{
	display:block;
	border:0;
	padding:0;
	margin:0;
	font-size:1.6rem;
	width:100%;
	height:40px;
	line-height:40px;
	text-align:center;
	background:#f60;
	color:#fff;
	-moz-border-radius: 4px;      /* Gecko browsers */
    -webkit-border-radius: 4px;   /* Webkit browsers */
    border-radius:4px;            /* W3*/
	}
</style>
