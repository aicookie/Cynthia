export function tip(form) {
	let search = form;
	var ul_list = document.getElementById("list");
	var api_baidu = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=";
	jquery.get(api_baidu, function (data) {
		console.log(data);
	});
}
