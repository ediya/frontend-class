(function(){

    function IPhone(number){ 
        
        Phone.call(this, number);
        this.model = "iPhone";
        this.number = number;       
       
    }
       
    IPhone.prototype = new Phone();
    IPhone.prototype.constructor = IPhone;

    IPhone.prototype.startFaceTime = function(){
        console.log("페이스타임을 겁니다!");
    };
    
    IPhone.prototype.setNumber = function(userNumber){
        number = userNumber;
    };
    
    window.IPhone = IPhone;

})();