//
var mymongo = require('mymongo1610');

//查询账单
function getBill(req, res, next) {
  mymongo.find('bill_list',function(err,result){
    if(err){
      return res.json({code:0,msg:err}) 
    }else{
      res.json({code:1,msg:result})
    }
  })
}

//添加账单
function addBill(req, res, next) {
  var uid = req.body.uid; 
  var icon = req.body.icon; //图标类名
  var type = req.body.type; //收入 0 ，支出 1 
  var money = req.body.money;
  var intro = req.body.intro; //描述,
  var timer = req.body.timer; //时间
  console.log(uid+type+ money +timer + intro +icon)
  if(!uid || !icon || !type || !money || !intro || !timer){
    return res.json({code:3,msg:'丢失参数'})
  }else if(money == 0.00){
    return res.json({code:3,msg:'金额不能为空！'})
  }
  mymongo.insert('bill_list',{uid:uid,icon:icon,timer:timer,type:type,money:money,intro:intro},function(err,result){
    if(err){
      return res.json({code:0,msg:err}) 
    }else{
      res.json({code:1,msg:result})
    }
  })
}

//删除账单
function deleteBill(req, res, next) {
  var _id = req.query.id;
  mymongo.delete('bill_list',{_id:_id},function(err,result){
    if(err){
      return res.json({code:0,msg:err}) 
    }else{
      res.json({code:1,msg:result})
    }
  })
}


//模糊查询
function searchBill(req, res, next) {
  var intro = new RegExp(req.body.intro);
  mymongo.find('bill_list',{intro:intro},function(err,result){
    if(err){
      return res.json({code:0,msg:err}) 
    }else{
      res.json({code:1,msg:result})
    }
  })
}
// db.getCollection('bill_list').find({'intro':/美/})


/*
    获取账单

    分两大种情况：

    1>按年 + 分类查询

    2>按月 + 分类查询
*/
function getBillTimer(req, res, next) {
  var params = req.body,
    uid = params.uid, //用户
    timer = params.timer; //时间
    console.log(timer)

  if(!timer || !uid){
    return res.json({code:3,msg:'参数丢失'})
  }

  if(timer.indexOf('-') != -1){   //当前有时间---说明按月查
    var timerArr = timer.split('-'); //[2019][01]
    if(timerArr[1] == '12'){ //如果年等于12月 2018-12
        bigTimer = (+timerArr[0]+1)+'-01'; // 2018 + 1 + '-01' = 2019-01
    }else{ //月
        bigTimer = timerArr[0]+'-'+ (+timerArr[1]+1); // 2019-1+1 =2019-2
    }
  }else{
    //说明按年查
    bigTimer = +timer+1+'';    // 2018 + 1 = 2019
  }
  if(!uid || !timer){
      return res.json({code:0,msg:'丢失参数'})
  }

  console.log(bigTimer)
  mymongo.find('bill_list',{$and:[{timer:{"$lt":bigTimer,"$gte":timer}},{uid:uid}]},function(err,result){ //$lt: < ;$lte: <=
    if(err){
      return res.json({code:0,msg:err}) 
    }else{
      res.json({code:1,msg:result})
    }
  })
}






/*
    获取账单

    分两大种情况：

    1>按年 + 分类查询

    2>按月 + 分类查询
*/
function getTimeBill(req, res, next){
  var timer = new RegExp(req.body.timer);
  console.log(timer)
  
  if(!timer){
    return res.json({code:0,data:'参数丢失'})
  }
  mymongo.find('bill_list',{timer:timer},function(err,result){
    if(err){
      return res.json({code:0,data:err})
    }else{
      return res.json({code:0,data:result})
    }
  })
}






//按时间查询 - 模糊查询
// function getTimeBill(req, res, next){
//   var timer = new RegExp(req.body.timer);
//   console.log(timer)
//   mymongo.find('bill_list',{timer:timer},function(err,result){
//     if(err){
//       return res.json({code:0,data:err})
//     }else{
//       res.json({code:1,data:result});
//     }
//   })
// }

module.exports = {
  getBill : getBill,
  addBill : addBill,
  deleteBill : deleteBill,
  getBillTimer : getBillTimer,
  searchBill : searchBill,
  getTimeBill : getTimeBill
}