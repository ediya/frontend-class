(function(app){

	app.rhtmlspecialchars = function(str) {
		if (typeof(str) == "string") {
			str = str.replace(/&gt;/ig, ">");
			str = str.replace(/&lt;/ig, "<");
			str = str.replace(/&#039;/g, "'");
			str = str.replace(/&quot;/ig, '"');
			str = str.replace(/&amp;/ig, '&'); /* must do &amp; last */
		}
		return str;
	}		


})(DaumSearchAPI);
