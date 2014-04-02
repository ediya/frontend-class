(function(){
    
    var number = "";

    function Phone(number, color, price){  
        
        this.number = number;
        this.color = color;
        this.price = price;
    }

    Phone.prototype.call = function(){

        if(number === ""){
            console.log("개통하세요!");
        }
        else{
            console.log("전화를 겁니다!");
        }

    };
    
    Phone.prototype.setNumber = function(userNumber){
        number = userNumber;
    };
    
    Phone.prototype.getNumber = function(){
        return this.number;
    };
     
    window.Phone = Phone;
    
})();


