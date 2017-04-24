function highlightPage() {
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	var headers = document.getElementsByTagName('heaser');
	if (headers.length == 0) return false;
	var navs = headers[0].getElementsByTagName('nav');
	if (navs.length == 0) return false;
	var links = navs[0].getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
	var	linkurl;
	for (var i = 0; i < links.length; i++) {
		linkurl = links[i].getAttribute('href');
		if (window.loadtion.href.indexof(linkurl) != -1){
			links[i].className = 'here';
	}
	}
	}
}
highlightPage();