<template>
    <div class="login">
     <header>
      <a href="javascript:history.back(-1)" class="back-off fl"><span class="glyphicon glyphicon-menu-left"></span></a>
      <div class="head-mid">
       <h1>会员登录</h1>
      </div>
     </header>
     <div class="head-top">
      <img src="../assets/images/head.jpg" />
     </div><!--head-top/-->
     <form action="user.html" method="get" class="reg-login">
      <h3>还没有三级分销账号？点此<router-link to='/reg'>注册</router-link></h3>
      <div class="lrBox">
       <div class="lrList"><input type="text" placeholder="输入手机号码或者邮箱号" v-model="username"/></div>
       <div class="lrList"><input type="text" placeholder="输入密码" v-model="password"/></div>
      </div><!--lrBox/-->
      <div class="lrSub">
       <input  value="立即登录" @click="login"/>
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
      login(){
        this.$axios({
          url:'http://localhost:3000/login',
          params:{
            username:this.username,
            password:this.password,
          },
          // withCredentials:true
        }).then((res)=>{
          console.log('访问login接口后',res.data);
          switch(res.data){
              case 0: 
              alert("请注册");
              break;
              case 1:
              alert("密码错误");
              break;
              case 2:
              this.$store.commit('USER',this.username)
              this.$router.replace('/user')
          }
         
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
</style>
