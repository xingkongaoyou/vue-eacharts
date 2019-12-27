var express = require('express');
var router = express.Router();
var e = require('./e/home');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/echarts/e/home', e);

module.exports = router;
