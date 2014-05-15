var DaumSearchAPI ={};

(function(app){

	app.API_KEY = "20d9e46b5c7e619be68876c3c0baa3cdfee9f0c2";

	app.TEMPLATE_URL = "<%=searchType%>?apikey=<%=apikey%>&q=<%=query%>&result=5&pageno=<%=pageno%>&output=json&callback=?";
	
	app.SELECT_API_URL = [
		"http://apis.daum.net/search/blog",
		"http://apis.daum.net/search/board",
		"http://apis.daum.net/search/web",
		"http://apis.daum.net/search/image",
		"http://apis.daum.net/search/knowledge",
		"http://apis.daum.net/search/cafe"
	]
	
	

})(DaumSearchAPI);