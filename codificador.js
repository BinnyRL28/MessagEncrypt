//Aqui comienza la programación :D
const a = ".-"
const b = "-..."
const c = "-.-."
const d = "-.."
const e = "."
const f = "..-."
const g = "--."
const h = "...."
const i = ".."
const j = ".---"
const k = "-.-"
const l = ".-.."
const m = "--"
const n = "-."
const o = "---"
const p = ".--."
const q = "--.-"
const r = ".-."
const s = "..."
const t = "-"
const u = "..-"
const v = "...-"
const w = ".--"
const x = "-..-"
const y = "-.--"
const z = "--.."
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
    if(codigoBase64 == true){
    var ingresoMensaje = document.getElementsByTagName("textarea")[0].value
    var mensajeCodificado = btoa(ingresoMensaje);
    document.getElementsByTagName("textarea")[1].innerHTML = mensajeCodificado;
    }

    if(codigoMorse == true){
        var texto ="Si funciona"
        document.getElementsByTagName("textarea")[1].innerHTML = texto;
        
    }
}

function desencriptar(elemento){
    var codigoBase64 = document.getElementById("base64").checked;
    var codigoMorse = document.getElementById("morse").checked;
    if(codigoBase64 == true){
    var ingresoMensaje = document.getElementsByTagName("textarea")[0].value
    var mensajeCodificado = atob(ingresoMensaje);
    document.getElementsByTagName("textarea")[1].innerHTML = mensajeCodificado;
    }
    if(codigoMorse == true){
        var texto ="Si funciona"
        document.getElementsByTagName("textarea")[1].innerHTML = texto;
        
    }
}