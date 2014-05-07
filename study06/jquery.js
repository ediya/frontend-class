$('#go').toggle(function(){

    $('#box').animate({                    
            left: document.body.clientWidth-110,
            top: document.body.clientHeight-110
        }, 1000);
    
}, function(){      

    $('#box').animate({                    
            left: 10,
            top: 10
        }, 1000);
    
});

/*
$(document).ready(function() {
                
    $('#go').on('click', function(){
    
        $('#box').animate({                    
            left: document.body.clientWidth-110,
            top: document.body.clientHeight-110
        }, 1000);
        
    });
    
});
*/