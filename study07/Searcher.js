(function($, app){

	var Searcher = function(){
		this.searchTypeIndex = 0;
	};

	Searcher.prototype = {

		setTypeIndex : function(index){
			this.searchTypeIndex = index;
		},
		
		search : function(query, pageno, callback){

			this.callback = callback;
			
			var temp = _.template(app.TEMPLATE_URL,
			{
				searchType : app.SELECT_API_URL[this.searchTypeIndex],
				
				apikey : app.API_KEY,

				query : query,

				pageno : pageno
			});

			console.log(temp)

			$.getJSON(temp, this.parse.bind(this));
		},

		parse : function(data){
			console.log(data)
			this.callback(data);
		}
	};

	app.Searcher = Searcher;

})(jQuery, DaumSearchAPI);