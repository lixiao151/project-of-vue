let express = require('express');
let router = express.Router();


//客户端使用

// let mongodb = require('mongodb');

const MongoClient = require('mongodb').MongoClient;//创建连接

// 库地址
const url = 'mongodb://127.0.0.1:27017';
 
// 库名
const dbName = '1806test';

router.get('/',(req,res)=>{
  
  let start=req.query.start-0;
  let count=req.query.count-0;
//   console.log(start);
  //操作库
  // connect 连接库服务
  MongoClient.connect(url, function(err, client) {//打开连接
    //err  连接失败
    //client 返回连接对象
    const db = client.db(dbName);// db 当前库  2018-9-29  连接到库

    const user = db.collection('huan'); //连接集合(表)

    user.find({},{
      limit:count,
      skip:start*count,
    }).toArray((err,data)=>{

      res.send(data);//返回给前端
      
      client.close();//连接关闭
      
    })
  });
});

module.exports=router;