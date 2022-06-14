var search_engine = 0;

function quick_01() {
	if (search_engine == 0) {
		document.location.href = "https://cn.bing.com/search?q=Russian%20War";
	} else if (search_engine == 2) {
		document.location.href = `https://baidu.com/s?wd=俄乌战况`;
	} else if (search_engine == 1) {
		document.location.href = "https://google.com/search?q=Russian%20War";
	}
}

function quick_02() {
	if (search_engine == 0) {
		document.location.href = "https://cn.bing.com/search?q=Zelensky";
	} else if (search_engine == 2) {
		document.location.href = `https://baidu.com/s?wd=泽连斯基`;
	} else if (search_engine == 1) {
		document.location.href = "https://google.com/search?q=Zelensky";
	}
}

function quick_03() {
	if (search_engine == 0) {
		document.location.href = "https://cn.bing.com/search?q=Covid-19";
	} else if (search_engine == 2) {
		document.location.href = `https://baidu.com/s?wd=新冠病毒`;
	} else if (search_engine == 1) {
		document.location.href = "https://google.com/search?q=Covid-19";
	}
}

function go_github() {
	document.location.href = "http://github.com";
}

function go_bilibili() {
	document.location.href = "http://bilibili.com";
}

function change_quick() {
	document.location.href = "./quick_search.html";
}

function change_start() {
	document.location.href = "./index.html";
}

function search(form) {
	if (search_engine == 0) {
		let q = form.q.value.trim();
		if (!q) {
			return false;
		}
		form.action = `https://cn.bing.com/search?q=${q}`;
		console.log(form.action);
		form.submit();
		return true;
	} else if (search_engine == 2) {
		let q = form.q.value.trim();
		if (!q) {
			return false;
		}
		form.action = `https://baidu.com/s?wd=${q}`;
		console.log(form.action);
		form.submit();
	} else if (search_engine == 1) {
		let q = form.q.value.trim();
		if (!q) {
			return false;
		}
		form.action = `https://google.com/search?q=${q}`;
		console.log(form.action);
		form.submit();
	}
}

function getTime() {
	let now = new Date();
	let h = now.getHours(),
		m = now.getMinutes(),
		s = now.getSeconds();
	let text = h > 12 ? "P.M" : "A.M";

	h = dealTime(h);
	m = dealTime(m);
	s = dealTime(s);

	let result = h + ":" + m + ":" + s + " " + text;
	document.getElementById("getTime").innerText = result;

	setTimeout(getTime, 1000);
}
window.addEventListener("load", getTime);

function dealTime(num) {
	return num > 9 ? num + "" : "0" + num;
}

function Dark_change() {
	console.log(localStorage.theme);
	if (localStorage.theme === "dark") {
		localStorage.theme = "light";
		document.documentElement.classList.remove("dark");
	} else {
		localStorage.theme = "dark";
		document.documentElement.classList.add("dark");
	}
	console.log(localStorage.theme);
}
if (
	localStorage.theme === "dark" ||
	(!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
	document.documentElement.classList.add("dark");
} else {
	document.documentElement.classList.remove("dark");
}

function change_google() {
	search_engine = 1;
	console.log(search_engine);
}

function change_baidu() {
	search_engine = 2;
	console.log(search_engine);
}

function change_bing() {
	search_engine = 0;
	console.log(search_engine);
}
