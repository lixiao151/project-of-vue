var express = require('express');
var router = express.Router();

// router.get('/', function(req, res){
//   // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
//   // res.setHeader('Access-Control-Allow-Credentials', true);
// //   console.log('cookies服务',req.query);

  
//   //兜库，看有无用户名,有才种,并取用户信息

// //   req.session.username=req.query.username;//种
// //   res.send({error:0,msg:'成功',data:{a:'用户信息'}});

// }); 
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
   
    user.find({},{
      
    }).toArray((err,data)=>{
        // console.log(data);
        let a;
       for(var i=0; i<data.length;i++){
           if(req.query.username!=data[i].username){
                a="0"
           }else if(req.query.username==data[i].username && req.query.password!=data[i].password){
                a="1"
           }else if(req.query.username==data[i].username && req.query.password==data[i].password){
                a="2";
                break;
           }
       }
       res.send(a)
      client.close();//连接关闭
      
    })
  });
});


module.exports = router;

