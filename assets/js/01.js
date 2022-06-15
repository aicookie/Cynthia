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

function change_google(se,name) {
	if (
		localStorage.theme === "dark" ||
		(!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
	) {
		remove_selected_se();
		se.classList.add("bg-stone-200/40");
		se.classList.add("p-4");
		se.classList.add("shadow-stone-400");
		se.classList.add("shadow-2xl");
		search_engine = 2;
		console.log(search_engine);
	} else {
		remove_selected_se();
		se.classList.add("bg-stone-200/40");
		se.classList.add("p-4");
		se.classList.add("shadow-stone-700");
		se.classList.add("shadow-2xl");
		search_engine = 2;
		console.log(search_engine);
	}

}

function change_baidu(se,name) {
	if (
		localStorage.theme === "dark" ||
		(!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
	) {
		remove_selected_se();
		se.classList.add("bg-stone-200/40");
		se.classList.add("p-4");
		se.classList.add("shadow-stone-400");
		se.classList.add("shadow-2xl");
		search_engine = 3;
		console.log(search_engine);
	} else {
		remove_selected_se();
		se.classList.add("bg-stone-200/40");
		se.classList.add("p-4");
		se.classList.add("shadow-stone-700");
		se.classList.add("shadow-2xl");
		search_engine = 3;
		console.log(search_engine);
	}
}

function change_bing(se,name) {
	if (
		localStorage.theme === "dark" ||
		(!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
	) {
		remove_selected_se();
		se.classList.add("bg-stone-200/40");
		se.classList.add("p-4");
		se.classList.add("shadow-stone-400");
		se.classList.add("shadow-2xl");
		search_engine = 1;
		console.log(search_engine);
	} else {
		remove_selected_se();
		se.classList.add("bg-stone-200/40");
		se.classList.add("p-4");
		se.classList.add("shadow-stone-700");
		se.classList.add("shadow-2xl");
		search_engine = 1;
		console.log(search_engine);
	}
}
function remove_selected_se() {
	let cs = document.querySelectorAll("div.change_search img")
	cs.forEach((it,index) => {



			it.classList.remove("bg-stone-200/40");
			it.classList.remove("p-4");
			it.classList.remove("shadow-stone-400");
			it.classList.remove("shadow-2xl");
			it.classList.remove("shadow-stone-700");

		
		//console.log('~~~',tab, index);
		// tab.addEventListener("click", () => {
		// 	console.log("add");
		// 	tabs.forEach((tab) => {	
		// 		tab.classList.remove("bg-slate-500/25 rounded-2xl box-border h-32 w-32 p-4");
		// 	});
		// 	tabs[index].classList.add("bg-slate-500/25 rounded-2xl box-border h-32 w-32 p-4");
		// });
	});	
}

// window.addEventListener("load", async () => {
// 	let cs = document.querySelectorAll("div.change_search img")
// 	console.log('~~~',cs);
//  });

