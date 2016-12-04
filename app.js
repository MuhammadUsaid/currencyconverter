function changeId(eId){
    var paras = document.getElementsByTagName("span");
    var paraIds = [];
    for(var a = 1; a < paras.length; a += 2){
        paraIds.push(paras[a].id);
    }
    var ids = ["dollar", "rupee", "pound", "euro"];
    var idToChange;
    for(var i = 0; i < ids.length; i++){
        if(ids[i] === paraIds[0] || ids[i] === paraIds[1] || ids[i] === paraIds[2]){
            
        }
        else{
            idToChange = ids[i]; 
            break;
        }
    }
    var element = document.getElementById(eId);
    element.id = idToChange;
    var text = element.previousSibling;
    var inputFieldDefault = document.getElementById("user-input");
    switch(idToChange){
        case "rupee":
            text.innerHTML = "Pakistani Rupees :";
            break;
        case 'dollar':
            text.innerHTML = "Dollars : ";
            break;
        case 'euro':
            text.innerHTML = "Euros : ";
            break;
        case 'pound':
            text.innerHTML = "Pounds : ";
            break;
    }
    switch(eId){
        case "rupee":
            inputFieldDefault.placeholder = "Pakistani Rupees";
            break;
        case "dollar":
            inputFieldDefault.placeholder = "Dollars";
            break;
        case "euro":
            inputFieldDefault.placeholder = "Euros";
            break;
        case "pound":
            inputFieldDefault.placeholder = "Pounds";
            break;
    }
        
}
function convert(){
    var input = document.getElementById("user-input").value;
    var inputType = document.getElementById("user-input").placeholder;
    switch(inputType){
        case "Dollars":
            input *= 0.94;
            var pound = (input * 0.85).toFixed(2);
            var rupee = (input * 111.01).toFixed(2);
            var euro = input.toFixed(2);
            document.getElementById("rupee").innerHTML = rupee;
            document.getElementById("pound").innerHTML = pound;
            document.getElementById("euro").innerHTML = euro;
            break;
        case "Pakistani Rupees":
            input *= 0.01;
            var pound = (input * 0.85).toFixed(2);
            var dollar = (input * 1.06).toFixed(2);
            var euro = input.toFixed(2);
            document.getElementById("pound").innerHTML = pound;
            document.getElementById("euro").innerHTML = euro;
            document.getElementById("dollar").innerHTML = dollar;
            break;
        case "Pounds":
            input *= 1.18;
            var dollar = (input * 1.06).toFixed(2);
            var rupee = (input * 111.01).toFixed(2);
            var euro = input.toFixed(2);
            document.getElementById("dollar").innerHTML = dollar;
            document.getElementById("rupee").innerHTML = rupee;
            document.getElementById("euro").innerHTML = euro;
            break;
        case "Euros":
            var pound = (input * 0.85).toFixed(2);
            var dollar = (input * 1.06).toFixed(2);
            var rupee = (input * 111.01).toFixed(2);
            document.getElementById("dollar").innerHTML = dollar;
            document.getElementById("rupee").innerHTML = rupee;
            document.getElementById("pound").innerHTML = pound;       
    }
    document.getElementById("user-input").value = "";
}