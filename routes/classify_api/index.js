//
var mymongo = require('mymongo1610');

//分类接口详细代码
function iconList(req, res, next) {
  mymongo.find('iconlilst',function(err,result){
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