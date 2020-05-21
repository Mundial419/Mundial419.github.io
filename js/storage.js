var savedHtml =  window.localStorage.getItem('html');
var savedCss =   window.localStorage.getItem('css');
var savedJs =  window.localStorage.getItem('javascript');

window.onload = function() {
	editor.session.insert({row:0, column: 0}, savedHtml);
	csseditor.session.insert({row:0, column: 0}, savedCss);
	jseditor.session.insert({row:0, column: 0}, savedJs);
	};