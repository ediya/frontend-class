(function($, app){

	var Main = function(){
		this.page = 1; 
		this.searcher = new app.Searcher();
		
		this.tabMenu();
		this.searchFormSubmit();
		this.searchQuery();
	};

	Main.prototype = {
		
		tabMenu : function(){
			// 1 블로그
			// 2 게시판
			// 3 웹
			// 4 이미지
			// 5 지식
			// 6 카페
			this.searcher.setTypeIndex(2);
		},

		searchQuery : function(){
				
				if($("#button").type === "submit"){
					this.page = 1;
				}

				var query = $('#query').val();

				if(query === ""){
					alert("검색어를 입력해주세요");
					return false;
				}

				this.searcher.search(query, this.page, this.print.bind(this));
			return false;

		},

		searchFormSubmit : function(){
			$('.search-form').on("submit", this.searchQuery.bind(this));
		},

		print : function(data){
			var templatListHtml = $('#listTemplate').html();

			if(this.page === 1 && $("button")[1].type === 'button'){
				$('button.more').on("click", this.searchQuery.bind(this)).show();
			}

			var appendFunction = (this.page === 1) ? 'html' : 'append';			
			$('.list .box')[appendFunction]( _.template(templatListHtml,{list : data.channel.item}));

			
			this.page++;
		}
	};

	window.app = new Main();

})(jQuery, DaumSearchAPI);