let fechaActual = new Date();
let dia = document.getElementById("dia");
let numero = document.getElementById("numero");
let mes = document.getElementById("mes");
let anio = document.getElementById("anio");
let hora = document.getElementById("hora");
let minutos = document.getElementById("minutos");
let tiempo = document.getElementById("tiempo");
let segundos = document.getElementById("segundos");


function diaFunc(){
    diaMostrar = fechaActual.getDay();
    switch (diaMostrar) {
        case 0:
          dia.innerHTML = "Domingo";
          break;
        case 1:
          dia.innerHTML = "Lunes";
          break;
        case 2:
          dia.innerHTML = "Martes";
          break;
        case 3:
          dia.innerHTML = "Miercoles";
          break;
        case 4:
          dia.innerHTML = "Jueves";
          break;
        case 5:
          dia.innerHTML = "Viernes";
          break;
        case 6:
          dia.innerHTML = "Sabado";
          break;
      }
}
diaFunc();

numero.innerHTML = fechaActual.getDate();

function mesFunc(){
    mesMostrar = fechaActual.getMonth();

    switch (mesMostrar) {
      case 0:
        mes.innerHTML = "de Enero";
        break;
      case 1:
        mes.innerHTML = "de Febrero";
        break;
      case 2:
        mes.innerHTML = "de Marzo";
        break;
      case 3:
        mes.innerHTML = "de Abril";
        break;
      case 4:
        mes.innerHTML = "de Mayo";
        break;
      case 5:
        mes.innerHTML = "de Junio";
        break;
      case 6:
        mes.innerHTML = "de Julio";
        break;
      case 7:
        mes.innerHTML = "de Agosto";
        break;
      case 8:
        mes.innerHTML = "de Septiembre";
        break;
      case 9:
        mes.innerHTML = "de Octubre";
        break;
      case 10:
        mes.innerHTML = "de Noviembre";
        break;
      case 11:
        mes.innerHTML = "de Diciembre";
        break;
    }
}

mesFunc();

anio.innerHTML = "de " + fechaActual.getFullYear();

hora.innerHTML = fechaActual.getHours();
minutos.innerHTML = fechaActual.getMinutes();
segundos.innerHTML = fechaActual.getSeconds();

console.log(fechaActual.getHours());

if (fechaActual.getHours() < 12) {
  tiempo.innerHTML = "AM";
} else {
  tiempo.innerHTML = "PM";
}

setInterval(() => {
  segundos.innerHTML++;
  if (parseInt(segundos.innerHTML) === 60) {
    segundos.innerHTML = 0;
  }
  if (parseInt(segundos.innerHTML) === 0) {
    minutos.innerHTML++;
  }
  if (parseInt(minutos.innerHTML) === 60) {
    minutos.innerHTML = 0;
  }
  if (parseInt(minutos.innerHTML === 0)) {
    hora.innerHTML++ ;
  }
  if(parseInt(hora.innerHTML) === 24){
    hora.innerHTML = 0;
    diaFunc;
    numero.innerHTML = fechaActual.getDate();
    mesFunc;
    anio.innerHTML = 'de ' + fechaActual.getFullYear();
  }

}, 1000);


// console.log(fechaActual)
// console.log(fechaActual.getDate())
// console.log(fechaActual.getDay())
// console.log(fechaActual.getHours())
// console.log(fechaActual.getMinutes())
// console.log(fechaActual.getSeconds())
// console.log(fechaActual.getMonth())
