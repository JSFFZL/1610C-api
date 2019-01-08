//
var mymongo = require('mymongo1610');

//查询所有icon
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