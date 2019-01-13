var express = require('express');
var router = express.Router();
var classIfy = require('./classify_api/index')


/* GET users listing. */

//分类接口
router.post('/api/classIfy',classIfy.iconList);



module.exports = router;
