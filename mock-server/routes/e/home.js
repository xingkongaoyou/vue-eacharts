var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  setTimeout(function () {
    res.json({
      'result': 'true',
      'data': [
        {
          'id': '1164102139671527424',
          'name': '郑州人民公园',
          'address': '河南省郑州市二七区西太康路68号附1号院铭功路117号院',
          'openType': '2019-12-07',
          'chargeCondition': '免费',
          'geom': '{"type":"Polygon","coordinates":[[[113.657502,34.763441],[113.658145,34.764076],[113.665699,34.763089],[113.666042,34.762525],[113.666171,34.761079],[113.666299,34.760198],[113.664626,34.759175],[113.664754,34.758259],[113.664583,34.757695],[113.663939,34.757412],[113.663596,34.758047],[113.662866,34.758294],[113.662523,34.759175],[113.662094,34.759669],[113.662051,34.760691],[113.661021,34.760868],[113.660463,34.761502],[113.659862,34.761044],[113.657502,34.763406],[113.657502,34.763406],[113.657502,34.763441]]]}',
          'basicComponentList': [],
          'districtList': [],
          'facilitieList': [],
          'gushuList': [],
          'geomSystem': 0,
          'dis': 4258.99685148,
          'longitude': '113.662646667065999',
          'latitude': '34.7615006774195976',
          'greenbeltFacility': {},
          'score': 2.5
        },
        {
          'id': '1205049798681190400',
          'name': '测试绿地',
          'address': '河南省郑州市二七区德化街街道苑陵街9号万博商城2期',
          'openType': '2018-07-30',
          'chargeCondition': '收费',
          'geom': '{"type":"Polygon","coordinates":[[[113.656949,34.758782],[113.658494,34.758394],[113.657936,34.757653],[113.656305,34.757936],[113.656949,34.758782]]]}',
          'basicComponentList': [],
          'districtList': [],
          'facilitieList': [],
          'gushuList': [],
          'geomSystem': 0,
          'dis': 4632.87700072,
          'longitude': '113.657403116398996',
          'latitude': '34.7581947587836027',
          'greenbeltFacility': {},
          'score': 0
        },
        {
          'id': '1163333994579103744',
          'name': '明理-游园',
          'address': '河南省郑州市金水区人民路街道金水路109号院紫荆山公园',
          'openType': '2019-07-07',
          'chargeCondition': '免费',
          'geom': '{"type":"Polygon","coordinates":[[[113.688719,34.761684],[113.689212,34.761384],[113.689341,34.761102],[113.689985,34.76186],[113.689277,34.762336],[113.688268,34.762336],[113.687689,34.762231],[113.686766,34.762407],[113.686573,34.762125],[113.686573,34.762125],[113.688719,34.761684]]]}',
          'basicComponentList': [],
          'districtList': [],
          'facilitieList': [],
          'gushuList': [],
          'geomSystem': 0,
          'dis': 4914.28432538,
          'longitude': '113.688575085926999',
          'latitude': '34.7619574769585',
          'greenbeltFacility': {},
          'score': 4
        },
        {
          'id': '1155754357646757888',
          'name': '紫荆山公园',
          'address': '中国河南省郑州市',
          'openType': '2017-05-14',
          'openStartDate': '15:00:00',
          'openEndDate': '17:00:00',
          'chargeCondition': '免费',
          'geom': '{"type":"Polygon","coordinates":[[[113.687882,34.761759],[113.688644,34.761671],[113.688665,34.76123],[113.68785,34.761212],[113.687882,34.761759]]]}',
          'basicComponentList': [],
          'districtList': [],
          'facilitieList': [],
          'gushuList': [],
          'geomSystem': 0,
          'dis': 4945.77932062,
          'longitude': '113.688245814731999',
          'latitude': '34.7614659353004001',
          'greenbeltFacility': {},
          'score': 3
        },
        {
          'id': '1167013676342124544',
          'name': '文化公园',
          'address': '河南省郑州市二七区大学路街道桃园洋房小区1号院桃源洋房',
          'openType': '2016-10-25',
          'openStartDate': '01:00:00',
          'openEndDate': '22:00:00',
          'chargeCondition': '收费',
          'geom': '{"type":"Polygon","coordinates":[[[113.632834,34.740366],[113.636439,34.74026],[113.636181,34.736769],[113.632877,34.736557],[113.632834,34.740366]]]}',
          'basicComponentList': [],
          'districtList': [],
          'facilitieList': [],
          'gushuList': [],
          'geomSystem': 0,
          'dis': 7218.29803828,
          'longitude': '113.634558098872006',
          'latitude': '34.7385149493144993',
          'greenbeltFacility': {},
          'score': 0
        },
        {
          'id': '1166639275269521408',
          'name': '龙子湖环湖公园',
          'address': '河南省郑州市金水区博学路街道平安大道龙子湖公园',
          'openType': '2013-08-16',
          'chargeCondition': '免费',
          'geom': '{"type":"Polygon","coordinates":[[[113.622565,34.730652],[113.623434,34.730599],[113.62234,34.72895],[113.621965,34.728941],[113.621965,34.728941],[113.621954,34.728941],[113.622565,34.730652]]]}',
          'basicComponentList': [],
          'districtList': [],
          'facilitieList': [],
          'gushuList': [],
          'geomSystem': 0,
          'dis': 8512.94447324,
          'longitude': '113.622629072783994',
          'latitude': '34.7298982781762007',
          'greenbeltFacility': {},
          'score': 0
        },
        {
          'id': '1161477170133360640',
          'name': '世纪欢乐园',
          'address': '河南省郑州市管城回族区航海东路街道世纪欢乐园',
          'openType': '2010-08-08',
          'chargeCondition': '免费',
          'geom': '{"type":"Polygon","coordinates":[[[113.714488,34.733915],[113.720367,34.733986],[113.720496,34.732187],[113.721097,34.732046],[113.725088,34.732081],[113.724745,34.730353],[113.723757,34.729119],[113.72144,34.726826],[113.716805,34.730071],[113.714531,34.731729],[113.714531,34.732258],[113.714273,34.732293],[113.714187,34.73254],[113.714488,34.73254],[113.714445,34.732646],[113.714488,34.733915]]]}',
          'basicComponentList': [],
          'districtList': [],
          'facilitieList': [],
          'gushuList': [],
          'geomSystem': 0,
          'dis': 9354.85539207,
          'longitude': '113.71968105389',
          'latitude': '34.7309817936546992',
          'greenbeltFacility': {},
          'score': 2
        },
        {
          'id': '1172066685410406400',
          'name': '双秀公园',
          'address': '河南省郑州市金水区瑞园西路',
          'openType': '2013-13-14',
          'chargeCondition': '免费',
          'geom': '{"type":"Polygon","coordinates":[[[113.671066,34.709714],[113.673834,34.709784],[113.673791,34.708285],[113.670894,34.708285],[113.671066,34.709714]]]}',
          'basicComponentList': [],
          'districtList': [],
          'facilitieList': [],
          'gushuList': [],
          'geomSystem': 0,
          'dis': 10148.24109419,
          'longitude': '113.672407379000006',
          'latitude': '34.709011359905297',
          'greenbeltFacility': {},
          'score': 0
        },
        {
          'id': '1161881487016095744',
          'name': '方特公园',
          'address': '河南省郑州市管城回族区经济开发区明湖街道远大理想城',
          'openType': '2015-05-06',
          'openStartDate': '00:00:00',
          'openEndDate': '23:00:00',
          'chargeCondition': '收费',
          'geom': '{"type":"Polygon","coordinates":[[[113.733599,34.730562],[113.739951,34.730773],[113.739264,34.72647],[113.733771,34.724636],[113.733771,34.724636],[113.733427,34.724354],[113.733427,34.724354],[113.733599,34.730562]]]}',
          'basicComponentList': [],
          'districtList': [],
          'facilitieList': [],
          'gushuList': [],
          'geomSystem': 0,
          'dis': 10549.35726323,
          'longitude': '113.736380594061004',
          'latitude': '34.7280939800317014',
          'greenbeltFacility': {},
          'score': 2
        },
        {
          'id': '1163398231817064448',
          'name': '一马路游园',
          'address': '河南省郑州市中原区航海西路街道滨湖北路帝湖花园西王府',
          'openType': '2016-06-06',
          'openStartDate': '00:28:00',
          'openEndDate': '23:28:00',
          'chargeCondition': '免费',
          'geom': '{"type":"Polygon","coordinates":[[[113.638121,34.703749],[113.639463,34.703775],[113.639624,34.702196],[113.638025,34.702523],[113.638121,34.703749]]]}',
          'basicComponentList': [],
          'districtList': [],
          'facilitieList': [],
          'gushuList': [],
          'geomSystem': 0,
          'dis': 10940.3433754,
          'longitude': '113.638837321961006',
          'latitude': '34.7030379984436976',
          'greenbeltFacility': {},
          'score': 0
        }
      ],
      'message': '查询绿地列表成功'
    })
  }, 3000)
})

module.exports = router
