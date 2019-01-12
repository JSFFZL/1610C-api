var express = require('express');
var router = express.Router();
var addUser = require('./classify_api/index')


/* GET users listing. */

//分类接口
router.post('/api/classIfy',addUser.addUser);



module.exports = router;
