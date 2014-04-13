danClick.onclick = function(){
    var test = document.getElementById("danInput");
    var output = document.getElementById("content");
    output.innerHTML = "";
    
    for(var i=1; i<10; i++){
        
        output.innerHTML += "</br>" + test.value + " * " + i + " = " + test.value*i;
        
        /*
        document.write("</br>");
        document.write(test.value + " * " + i + " = " + test.value*i);
        */
    }
}