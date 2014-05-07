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
    //이곳에 실행될 함수를 작성한다
    
    $('#go').on('click', function(){
    
        $('#box').animate({                    
            left: document.body.clientWidth-110,
            top: document.body.clientHeight-110
        }, 1000);
        
    });
    
});
*/