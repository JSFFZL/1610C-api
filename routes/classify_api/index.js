//
var mymongo = require('mymongo1610');

//分类接口详细代码
function iconList(req, res, next) {
  var uid = req.body.uid;
  var c_type = req.body.c_type;

  if(!uid || !c_type){
    return  res.json({code:3,msg:'参数为空！'})
  
  }
  mymongo.find('classify',{uid:uid,c_type:c_type},function(err,result){
    if(err){
      return res.json({code:0,msg:err}) 
    }else{
      res.json({code:1,msg:result})
    }
  })
  
}





module.exports = {
  iconList : iconList
}