var express = require("express");
var cors = require("cors");
var axios = require("axios");

var app = express();
app.use(cors());

const AmapKey= "ee95e52bf08006f63fd29bcfbcf21df0"

app.get("/products/:id", function (request, response, next) {
	response.json({ msg: "This is CORS-enabled for all origins!" });
});

// https://api.bing.com/qsonhs.aspx?type=cb&q=
// https://lbs.amap.com/api/webservice
// https://lbs.amap.com/api/webservice/download?spm=a2c6h.12873639.article-detail.9.7fa56545OYhmnh
//
// /weather/310000
app.get("/weather/:city", function (request, response, next) {
	var city = request.params.city;
    let query=`https://restapi.amap.com/v3/weather/weatherInfo?key=${AmapKey}&city=${city}&extensions=all`
	console.log(`${request.path} : ${query}`);
	axios.get(query).then(function (rsp) {
		let contentType = rsp.headers['content-type'];
		console.log(rsp.headers);
		console.log(contentType);
		console.log(rsp.data);
		response.status(200).contentType(contentType).send(rsp.data)
		// {"status":"1","count":"1","info":"OK","infocode":"10000","forecasts":[{"city":"深圳市","adcode":"440300","province":"广东","reporttime":"2022-06-15 18:30:31","casts":[{"date":"2022-06-15","week":"3","dayweather":"大雨","nightweather":"大雨","daytemp":"29","nighttemp":"25","daywind":"西南","nightwind":"西南","daypower":"≤3","nightpower":"≤3"},{"date":"2022-06-16","week":"4","dayweather":"大雨","nightweather":"大雨","daytemp":"29","nighttemp":"26","daywind":"西南","nightwind":"西南","daypower":"4","nightpower":"4"},{"date":"2022-06-17","week":"5","dayweather":"大雨","nightweather":"大雨","daytemp":"30","nighttemp":"26","daywind":"西南","nightwind":"西南","daypower":"4","nightpower":"4"},{"date":"2022-06-18","week":"6","dayweather":"大雨","nightweather":"大雨","daytemp":"30","nighttemp":"26","daywind":"西南","nightwind":"西南","daypower":"4","nightpower":"4"}]}]}
	});
	//`https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${encodeURI(location)}`;
	//window.baidu.sug({q:"上海",p:false,s:["上海疫情最新消息","上海天气","上海砍人","上海金山当街砍人","上海财经大学","上海师范大学","上海外国语大学","上海有色金属网","上海理工大学","上海银行客服电话"]});
	//window.baidu.sug({q:"�Ϻ�",p:false,s:["�Ϻ�����������Ϣ","�Ϻ�����","�Ϻ�����","�Ϻ���ɽ���ֿ���","�Ϻ��ƾ���ѧ","�Ϻ�ʦ����ѧ","�Ϻ�������ѧ","�Ϻ���ɫ������","�Ϻ�������ѧ","�Ϻ����пͷ��绰"]});
});
// /address/ip
app.get("/address/ip", function (request, response, next) {
    let query=`https://restapi.amap.com/v3/ip?output=json&key=${AmapKey}`
	console.log(`${request.path} : ${query}`);
	axios.get(query).then(function (rsp) {
		let contentType = rsp.headers['content-type'];
		console.log(rsp.headers);
		console.log(contentType);
		console.log(rsp.data);
		response.status(200).contentType(contentType).send(rsp.data)
		// {"status":"1","info":"OK","infocode":"10000","province":"广东省","city":"深圳市","adcode":"440300","rectangle":"113.9629412,22.4627142;114.2106056,22.61394155"}
	});
});

app.listen(8888, function () {
	console.log("CORS-enabled web server listening on port 8888");
});


