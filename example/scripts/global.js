function addLoadEvent() {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload =func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}
function insertAfter(newElement, targetElemenet) {
	var parent = targetElemenet.parentNode;
	if (parent.lastChild == targetElemenet) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement, targetElemenet.nextSibling);
	}
}
function addClass(element, value) {
	if (!element.className) {
		element.className = value;
	} else {
		newClassName = element.className;
		newClassName += "";
		newClassName += value;
		element.className = newClassName;
	}
}
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
addLoadEvent(highlightPage);