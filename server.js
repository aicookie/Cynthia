var express = require("express");
var cors = require("cors");
var axios = require("axios");

var app = express();
app.use(cors());

app.get("/products/:id", function (req, res, next) {
	res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.get("/sp0/:location", function (req, res, next) {
	var location = req.params.location;
	// var api_baidu = "广东";
	var sp0 = `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${encodeURI(location)}`;
	console.log(`/spo/${location} : ${sp0}`);
	axios.get(sp0).then(function (response) {
		console.dir(response.data);
		//window.baidu.sug({q:"上海",p:false,s:["上海疫情最新消息","上海天气","上海砍人","上海金山当街砍人","上海财经大学","上海师范大学","上海外国语大学","上海有色金属网","上海理工大学","上海银行客服电话"]});
		//window.baidu.sug({q:"�Ϻ�",p:false,s:["�Ϻ�����������Ϣ","�Ϻ�����","�Ϻ�����","�Ϻ���ɽ���ֿ���","�Ϻ��ƾ���ѧ","�Ϻ�ʦ����ѧ","�Ϻ�������ѧ","�Ϻ���ɫ������","�Ϻ�������ѧ","�Ϻ����пͷ��绰"]});
	});
	// res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.listen(8888, function () {
	console.log("CORS-enabled web server listening on port 8888");
});
