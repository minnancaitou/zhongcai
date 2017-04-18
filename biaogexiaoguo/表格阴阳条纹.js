function stripeTables() {
	if (!document.getElementsByTagName) return false;
	var tables = document.getElementsByTagName("table");
	
	for (var i = 0; i < tables.length; i++) {
		var odd, rows;
		odd = false;
		rows = tables[i].getElementsByTagName("tr");
		for (var j = 0; j < rows.length; j++) {
			if (odd == true) {
				
				odd = false;
			} else 

			{
				rows[j].style.backgroundColor = "#ffc";
				odd = true;
			}
		}
	}
}
addLoadEvent(stripeTables);