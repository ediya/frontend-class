(function(){

    function Android(number){ 
        
        Phone.call(this, number);
        this.model = "Android";
        this.number = number;       
       
    }
       
    Android.prototype = new Phone();
    Android.prototype.constructor = Android;

    Android.prototype.startFaceTime = function(){
        console.log("영상통화를 겁니다!");
    };
    
    Android.prototype.setNumber = function(userNumber){
        number = userNumber;
    };
    
    window.Android = Android;

})();