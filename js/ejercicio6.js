// Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo desde donde comenzará a decrementar el contador. Debe contener los botones, iniciar, pausar y reset. 
 
let btnStart = document.getElementById("start");
let btnStop = document.getElementById("stop")
let btnRestart = document.getElementById('restart');
let segundos = document.getElementById("segundos");
let minutos = document.getElementById("minutos");
let horas = document.getElementById("hora");

btnStart.addEventListener("click", comenzar);
btnStop.addEventListener("click", detener);
btnRestart.addEventListener('click', reiniciar);
segundos.addEventListener('click', modificar);
minutos.addEventListener('click', modificar)
horas.addEventListener('click', modificar)