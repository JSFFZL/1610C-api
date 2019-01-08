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
  var timer = new Date().toLocaleString().split(' ')[1];
  if(!uid || !icon || !type || !money || !money){
    return res.json({code:3,msg:'丢失参数'})
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

module.exports = {
  getBill : getBill,
  addBill : addBill,
  deleteBill : deleteBill
}