(function(){
    
    function Person(my_name, phone){    
        this.name = my_name;
        this.phone = phone;
    }

    Person.prototype.getName = function(){
        return this.name;
    };
        
    Person.prototype.sendSMS = function(person, message){
        console.log("[" + this.name + "]가 " + "[" + person.getName() + "]에게 " + "[" + message + "]" + "메세지를 보냈습니다.");
        console.log(this.phone.getNumber() + "(" + this.phone.model + ")" + " → " + person.phone.getNumber())
        console.log("[" + person.getName() + "]가 " + "[" + this.name + "]에게 " + "[" + message + "]" + "메세지를 받았습니다.");
        console.log("");
    };
     
    window.Person = Person;

})();