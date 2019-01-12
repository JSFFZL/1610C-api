var express = require('express');
var router = express.Router();
var bill = require('./bill_api/index')


/* GET users listing. */
//获取账单
router.get('/api/getBill',bill.getBill);

//添加账单信息
router.post('/api/addBill',bill.addBill);

//删除账单信息
router.get('/api/deleteBill',bill.deleteBill);

//按时间获取账单
router.post('/api/getBillTimer',bill.getBillTimer);

module.exports = router;

