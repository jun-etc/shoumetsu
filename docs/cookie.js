function setCokkie(name, value){
	var date = new Date();
	date.setTime(date.getTime() + (60 * 86400 * 1000));
	document.cookie = name + '=' + escape(value) + '; expires=' + date.toGMTString();
}

function getCokkie(name){
	if (document.cookie.length == 0) {
		return false;
	}
	start = document.cookie.indexOf(name + '=');
	if (start == -1) {
		return false;
	}
	start = start + name.length + 1;
	end = document.cookie.indexOf(';', start);
	if(end == -1) {
		end = document.cookie.length;
	}
	return unescape(document.cookie.substring(start, end));
}

function delCokkie(name){
	var date = new Date();
	date.setTime(0);
	document.cookie = name + '=; expires=' + date.toGMTString();
}
