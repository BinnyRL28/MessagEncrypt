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

function encriptar(elemento){
    var ingresoMensaje = document.getElementsByTagName("textarea")[0].value
    var mensajeCodificado = btoa(ingresoMensaje);
    document.getElementsByTagName("textarea")[1].innerHTML = mensajeCodificado;
}

function desencriptar(elemento){
    var ingresoMensaje = document.getElementsByTagName("textarea")[0].value
    var mensajeCodificado = atob(ingresoMensaje);
    document.getElementsByTagName("textarea")[1].innerHTML = mensajeCodificado;
}

let emoji = ':D';

const greet = (name) => {
  emoji = ':)';
  const myGreet = () => `Hola ${name} ${emoji}`;
  return myGreet();
};

console.log(greet('Laboratoria'));

for (let i = 0; i <= 10; i++) {
    if (i == 5) {
      continue;
    } else {
      console.log(i);
    }
  }