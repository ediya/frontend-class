(function(){
    function Chess (){
        this.board = document.getElementById("board");
        this.spanArray = document.getElementsByTagName("span");
        this.span = ""; 
        this.red = null;
        this.chessLayOut();
    };

    Chess.prototype = {
        chessLayOut : function(){            
          for(var i = 0 ; i < 4; i++){
              var color = (i % 2 === 0) ? "black" : "white";
              
              for(var j = 0 ; j < 4; j++){
                  this.span += "<span class="+color+"></span>";
                  color = (color === "white") ? "black" : "white";
              }
          }
            this.board.innerHTML = this.span;
            this.spanClickEvent();
        },
        
        spanClickEvent : function(){
            for(var i = 0 ; i < this.spanArray.length;i++){
                var eachSpan = this.spanArray[i];
                eachSpan.addEventListener("click", this.clickColor.bind(this));
            }
        },
        
        clickColor : function(e){
            if(this.red != null){
                this.red.className = this.red.className.replace(" red","");
            }
            e.target.className+=" red";
            this.red = e.target;
        }
    };
    
    window.chess = new Chess();
    
})();
