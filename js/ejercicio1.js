// Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
//Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.

let botonComenzar = document.querySelector("#btnComenzar");
let formulario = document.querySelector("#formJuego");
let numeroMagico = 0;
//agregar eventos desde javascript
// botonComenzar.addEventListener('click', ()=>{ comenzarJuego(variable)});
botonComenzar.addEventListener("click", comenzarJuego);
formulario.addEventListener("submit", adivinarNumero);

function comenzarJuego() {
  numeroMagico = Math.floor(Math.random() * (10 + 1 - 1) + 1);
  console.log(numeroMagico);
}

function adivinarNumero(e) {
  e.preventDefault();
  let numeroIngresado = document.querySelector("input").value;
  //completar las preguntas correspondientes
  //formulario.reset();
 
}

if (comenzarJuego === numeroIngresado) {
    console.log("adivinaste");
  } else {
    console.log("no adivinaste");
  }
  

  //tener el ccuenta el parseint