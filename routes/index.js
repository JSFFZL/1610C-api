var express = require('express');
var router = express.Router();
var mymongo1610 = require('mymongo1610');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '我是首页！！！' });
});

module.exports = router;
