function moveElement( elementID, final_x, final_y, interval) {
	if ( !document.getElementById) return false;
	if ( !document.getElementById(elementID)) return false;
	var elem = document.getElementById(elementID);
	var xpos = parseInt( elem.style.left);  //字符串转换为整数
	var ypos = parseInt( elem.style.top);
	if ( xpos == final_x && ypos == final_y) {
		clearTimeout(movement);
		moveElementA("message", 50, 100, 10);
		return;
		
	}
	if (xpos < final_x) {
		xpos++;
	}
	if (xpos > final_x) {
		xpos--;
	}
	if (ypos < final_y) {
		ypos++;
	}
	if (ypos > final_y) {
		ypos--;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	var repeat = "moveElement('"+elementID+"', "+final_x+", "+final_y+", "+interval+")";
	movement = setTimeout(repeat, interval);
}