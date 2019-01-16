var express = require('express');
var router = express.Router();
var bill = require('./bill_api/index')


/* GET users listing. */
//获取账单
router.get('/api/getBill',bill.getBill);

//添加账单信息
router.post('/api/addBill',bill.addBill);

//删除账单信息
router.post('/api/deleteBill',bill.deleteBill);

//按时间获取账单
router.post('/api/getBillTimer',bill.getBillTimer);

//按时间获取账单(模糊查询)
router.post('/api/getTimeBill',bill.getTimeBill);

//模糊查询账单
router.post('/api/searchBill',bill.searchBill);


module.exports = router;

