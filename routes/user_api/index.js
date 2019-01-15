
var mymongo = require('mymongo1610');

//添加用户
function addUser(req, res, next) {
  var nick_name = req.body.nick_name || '';
  if(nick_name){
    mymongo.insert('userlist',{nick_name:nick_name},function(err,result){
      if(err){
        return res.json({code:0,msg:err}) 
      }else{
        res.json({code:1,msg:result.insertedId})
      }
    })
  }else{
    res.json({code:4,msg:'用户不存在'})
  }
}

function getUser(req, res, next) {
  var nick_name = req.body.nick_name || '';
  if(nick_name){
    mymongo.find('userlist',{nick_name:nick_name},function(err,result){
      if(err){
        return res.json({code:0,msg:err}) 
      }else{
        res.json({code:1,msg:result})
      }
    })
  }else{
    res.json({code:4,msg:'用户不存在'})
  }
}

module.exports = {
  addUser : addUser,
  getUser : getUser
}