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

/*console.log("funcionando")

encriptarCesar()

function encriptarCesar(palabra="esta es la palabra",desfaceIzquierda=10){
    desfaceIzquierda = Math.abs(desfaceIzquierda)
    alfabeto="abcdefghijklmnñopqrstuvwxyz"
    arr_alfabeto = [...alfabeto]
    cesar = []
    for (let i = 0; i < arr_alfabeto.length; i++) {
        n = i+desfaceIzquierda
        if (n>=arr_alfabeto.length) {
            n = n-arr_alfabeto.length
        }
        cesar.push(arr_alfabeto[n])
    }
    console.log(cesar)
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
    if(cifradoCesar==true){
       
        let mensaje = document.getElementById("ingresoMensaje").value;
        let desplazamiento = document.getElementById("rango").value;

        function encriptarCesar(palabra , desfase_izquierda= 3) {
            desfase_izquierda = Math.abs(desfase_izquierda)
            Alfabeto = "abcdefghijklmnñopqrstuvwxyz";
            Alfabeto = [...Alfabeto];
            Cesar = [];
            for (let i = 0; i < Alfabeto.length; i++) {
                n = i + 10;
                if (n >= Alfabeto.length) {
                    n = n - Alfabeto.length;
                }
                Cesar.push(Alfabeto[n])
            }
            palabra = [...palabra]
            retorno = ""
            for (let i = 0; i < palabra.length; i++) {
                const letra = palabra[i];
                let n = Alfabeto.indexOf(letra)
                if (n == -1) {
                    retorno += letra;
                    continue
                }
                retorno += Cesar[n]
            }
            console.log(retorno)
            return retorno
        }encriptarCesar(mensaje, desplazamiento);
    }else{
        alert("Selecciona un tipo de Código");
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
    if(cifradoCesar == true){

        let mensaje = document.getElementById("ingresoMensaje").value;
        let desplazamiento = document.getElementById("rango").value;

        function desencriptarCesar(palabra , desfase_izquierda ) {
            desfase_izquierda = Math.abs(desfase_izquierda)
            Alfabeto = "abcdefghijklmnñopqrstuvwxyz";
            Alfabeto = [...Alfabeto];
            Cesar = [];
            for (let i = 0; i < Alfabeto.length; i++) {
                n = i + 10;
                if (n >= Alfabeto.length) {
                    n = n - Alfabeto.length;
                }
                Cesar.push(Alfabeto[n])
            }
            palabra = [...palabra]
            retorno = ""
            for (let i = 0; i < palabra.length; i++) {
                const letra = palabra[i];
                let n = Cesar.indexOf(letra)
                if (n == -1) {
                    retorno += letra;
                    continue
                }
                retorno += Alfabeto[n]
            }
            console.log(retorno)
            return retorno
            
        }desencriptarCesar(mensaje, desplazamiento);
    }else{
        alert("Selecciona un tipo de Codigo")
    }
}





