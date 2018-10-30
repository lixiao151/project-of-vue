var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;//创建连接

// 库地址
const url = 'mongodb://127.0.0.1:27017';
 
// 库名
const dbName = '1806test';

router.get('/',(req,res)=>{
//   console.log(start);
  //操作库 
  // connect 连接库服务
  MongoClient.connect(url, function(err, client) {//打开连接
    //err  连接失败
    //client 返回连接对象
    const db = client.db(dbName);// db 当前库  2018-9-29  连接到库

    const user = db.collection('reg'); //连接集合(表)
    // console.log(req.query)
    let data ={username:req.query.username,password:req.query.password}  //数据
    // console.log(data)
    user.insert(data,function(err,results){      //向mongodb库  表里面存数据  兜库
        console.log(err,results,"uyhfiu")
    })
    user.find({},{           
      
    }).toArray((err,data)=>{

      res.send(data);//返回给前端    把数据
      
      client.close();//连接关闭
      
    })
  });
});

// router.get('/', function(req, res){

//   res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
//   res.setHeader('Access-Control-Allow-Credentials', true);
  
//   // console.log('获取cookies',req.session);
//   // console.log('获取前端提交信息',req.query);

//   // 兜库，看有无用户名,有才种,并取用户信息
//   // console.log(req.session);
// //   req.session.username=req.query.username;//种  库里面用户的 ID
// //   console.log(req.session);
//   res.send({error:0,msg:'成功',data:res});

// });

module.exports = router;
