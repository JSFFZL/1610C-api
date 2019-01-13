//
var mymongo = require('mymongo1610');

//分类接口详细代码
function iconList(req, res, next) {
  var uid = req.body.uid; //用户
  var c_type = req.body.c_type; //收入 0 ，支出 1 
  console.log(c_type)
  if(!c_type && !uid ){
    return res.json({code:3,msg:'参数丢失！'})
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