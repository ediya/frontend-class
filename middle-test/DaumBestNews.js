(function(app){

    function DaumBestNews(){
        this.manyNews = '';
        this.parse= '';
        this.run();
    }

    DaumBestNews.prototype = {

        run : function(){         
            app.callAjax('manyNews.js',this.init.bind(this));
            this.moreButton();
        },

        moreButton : function(){

            var that = this;
            
            var moreButton = document.getElementById('more');

            moreButton.addEventListener('click', function(){

                var page = that.manyNews.length;
                
                that.makeTemplateList(page);
                
            });            
        },

        init : function(responseText){
            this.parse = JSON.parse(responseText);

            this.manyNews = this.parse[0].news;

            this.executeTabEvent();

            this.makeTemplateList(5);
        },


        executeTabEvent : function(){
            var tabMenu  = document.getElementsByTagName('li');

            for(var i = 0 ; i < tabMenu.length; i++)
                tabMenu[i].addEventListener('click', this.selectTabMenu.bind(this));
        },


        selectTabMenu : function(e){
            var id = e.target.id;
            if(id === "news"){
                this.manyNews = this.parse[0].news;

            }else if(id === 'enter'){
                this.manyNews = this.parse[1].enter;

            }else if(id === 'sports'){
                this.manyNews = this.parse[2].sports;
            }

            this.makeTemplateList(5);

        },


        makeTemplateList : function(page){
            var templateString = document.getElementById('templateNewsList').innerHTML;
            var parseString = [];

            for(var i = 0 ; i < page; i++){ 
                parseString.push(app.template(templateString, {newsId : this.manyNews[i].newsId, newsTitle : this.manyNews[i].title})); 
            }

            document.getElementById('container').innerHTML = parseString.join("");        
        }
    };  


    window.daumBestNews = new DaumBestNews();


})(Util);
