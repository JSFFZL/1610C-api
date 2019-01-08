var express = require('express');
var router = express.Router();
var iconList = require('./icon_api/index')


/* GET users listing. */

//查看所有的icon (iconlilst)
router.post('/api/iconList',iconList.iconList);



module.exports = router;
