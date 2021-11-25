//Aqui comienza la programación :D

//getElementByTagName es para coger todos los elementos cuya etiqueta sea textarea
/*
var tipoCodigo = document.getElementById("codigos").value;
var codigoMorse = document.getElementById("morse").value;
var codigoBase64 = document.getElementById("base64").value;

function encriptarBase64(){
    var ingresoMensaje = document.getElementsByTagName("textarea")[0].value;
    var mensajeCodificado = btoa(ingresoMensaje);
    document.getElementsByTagName("textarea")[1].innerHTML = mensajeCodificado;
}

function encriptarCodigoMorse(){
    var texto ="Si funciona";
        document.getElementsByTagName("textarea")[1].innerHTML = texto;
}

function encriptar(elemento){
    
    if(tipoCodigo == "Base64"){
    encriptarBase64();
    console.log(tipoCodigo);
    }

    if(tipoCodigo == "Código Morse"){
       encriptarCodigoMorse();
    console.log(tipoCodigo);
    }
    
}

function desencriptar(elemento){
    var ingresoMensaje = document.getElementsByTagName("textarea")[0].value
    var mensajeCodificado = atob(ingresoMensaje);
    document.getElementsByTagName("textarea")[1].innerHTML = mensajeCodificado;
}
*/




function encriptar(elemento){
    var codigoBase64 = document.getElementById("base64").checked;
    var codigoMorse = document.getElementById("morse").checked;
    var cifradoCesar = document.getElementById("cesar").checked;
    if(codigoBase64 == true){
    var ingresoMensaje = document.getElementsByTagName("textarea")[0].value
    var mensajeCodificado = btoa(ingresoMensaje);
    document.getElementsByTagName("textarea")[1].innerHTML = mensajeCodificado;
    }
   
    if(codigoMorse == true){
        const mapping = {"A": ".-","B": "-...","C": "-.-.","D": "-..",
        "E": ".","F": "..-.","G": "--.","H": "....","I": "..","J": ".---","K": "-.-","L": ".-..",
        "M": "--","N": "-.","Ñ": "--.--","O": "---","P": ".--.","Q": "--.-","R": ".-.","S": "...",
        "T": "-","U": "..-","V": "...-","W": ".--","X": "-..-","Y": "-.--","Z": "--..",
    
        "0": "-----","1": ".---","2": "..---","3": "...--","4": "....-","5": ".....",
        "6": "-....","7": "--...","8": "---..","9": "----."
    }
        function cifrarMorse(){
        let mensaje = document.getElementById("ingresoMensaje").value;
        mensaje = mensaje.toUpperCase();
        let arr1 = Array.from(mensaje);
        console.log(arr1);
        let arr2 = arr1.map(x=>{
            if (mapping[x]){
                return mapping[x];
                
            }else{

                return x;
            }
        });
        let code = arr2.join(" ");
        document.getElementById("salidaMensaje").value = code;
        }
        cifrarMorse();
        }
    
    }

function desencriptar(elemento){
    var codigoBase64 = document.getElementById("base64").checked;
    var codigoMorse = document.getElementById("morse").checked;
    var cifradoCesar= document.getElementById("cesar").checked;
    if(codigoBase64 == true){
    var ingresoMensaje = document.getElementsByTagName("textarea")[0].value
    var mensajeCodificado = atob(ingresoMensaje);
    document.getElementsByTagName("textarea")[1].innerHTML = mensajeCodificado;
    }
    if(codigoMorse == true){
        const mapping = {".-":"A","-...":"B","-.-.":"C","-..":"D",
        ".":"E","..-.":"F","--.":"G","....":"H","..":"I",".---":"J","-.-":"K",".-..":"L",
       "--":"M", "-.":"N", "--.--":"Ñ", "---":"O",".--.":"P","--.-":"Q",".-.":"R","...":"S" ,
         "-":"T","..-":"U","...-":"V",".--":"W","-..-":"X","-.--":"Y","--..":"Z",
    
         "-----":"0",".---":"1","..---":"2" ,"...--":"3","....-":"4",".....":"5",
        "-....":"6","--...":"7","---..":"8","----.":"9"
    }
        function descifrarMorse(){
        let mensaje = document.getElementById("ingresoMensaje").value;
        let arr1 = Array.from(mensaje);
        let arr2 = 
        console.log(arr1);
        let arr2 = arr1.map(x=>{
            if (mapping[x]){
                return mapping[x];
                
            }else{

                return x;
            }
        });
        let code = arr2.join(" ");
        document.getElementById("salidaMensaje").value.toUpperCase = code;
        }
        descifrarMorse();
    }
}





