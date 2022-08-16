let btnStart = document.getElementById("start");
let btnStop = document.getElementById("stop")
let segundos = document.getElementById("segundos");
let minutos = document.getElementById("minutos");
let horas = document.getElementById("hora");
let btnRestart = document.getElementById('restart');

btnStart.addEventListener("click", comenzar);
btnStop.addEventListener("click", detener);
btnRestart.addEventListener('click', reiniciar);

let ejecucion = true;

btnStop.disabled = true;
btnRestart.disabled = true;

function comenzar(){
    btnStop.disabled = false;
    btnRestart.disabled = false;
    btnStart.disabled = true;
    ejecucion = true;
    function interval(){
        if(parseInt(segundos.innerHTML) < 59){
            segundos.innerHTML++;
        } else {
            segundos.innerHTML = 0;
            minutos.innerHTML++;
        } 
        if(parseInt(minutos.innerHTML) === 60){
            horas.innerHTML++;
            minutos.innerHTML = 0;
        }
        if(ejecucion === false){
            clearInterval(tiempo);
        }
    }
    let tiempo = setInterval(interval, 1000);
}

function detener(){
    btnStop.disabled = true;
    btnRestart.disabled = false;
    btnStart.disabled = false;
    if (ejecucion === false){
        ejecucion = true
    }else{
        ejecucion = false
    }
} 

function reiniciar (){
    btnStop.disabled = true;
    btnRestart.disabled = true;
    btnStart.disabled = true;
    detener();
    segundos.innerHTML = parseInt('0');
    minutos.innerHTML = parseInt('0');
    horas.innerHTML = parseInt('0');
    ejecucion === true;

}