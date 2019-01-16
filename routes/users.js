var express = require('express');
var router = express.Router();
var addUser = require('./user_api/index')


/* GET users listing. */

//查看用户并添加用户
router.post('/api/addUser',addUser.addUser);


//查询用户
router.post('/api/getUser',addUser.getUser);




module.exports = router;
