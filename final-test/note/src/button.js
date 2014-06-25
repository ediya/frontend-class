(function($, app){
    
    var Button = function(){
        this.run();
    }
    
    Button.prototype = {
         run : function(){
             app.makeButton("#new-note","click", this.clearNotePaper.bind(this));
             app.makeButton("#full-screen","click", this.fullScreen.bind(this));
             app.makeButton("#file-save", "click", this.saveFile.bind(this));
         },
        
        clearNotePaper : function(){
            setHtmlCode("");
            window.localStorage.clear();
            
            //$("#contents").code("");
        },
        
        fullScreen : function(){
            
            document.fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.documentElement.webkitRequestFullScreen ||                 document.documentElement.msRequestFullscreen;

            function requestFullscreen(element) {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
                } else if(element.msRequestFullscreen){
                    element.msRequestFullscreen();
                }
            }
            
            if (document.fullscreenEnabled) {
                requestFullscreen(document.documentElement);
            };
            
        },
        
        saveFile : function(){
            var value = $('#contents').code();
            var blob = new Blob([value], {type: "text/plain;charset=utf-8"});
            saveAs(blob, "hello world.html");
        }
        
    };
    
    window.button = new Button();
    
})(jQuery, util);