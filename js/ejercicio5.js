let btnStart = document.getElementById("start");
let segundos = document.getElementById("segundos");
let minutos = document.getElementById("minutos");
let hora = document.getElementById("hora");

btnStart.addEventListener("click", comenzar);

function comenzar() {
  if (btnStart.className === "btn btn-success ms-5") {
    //aqui modificamos el boton start a stop
    btnStart.removeChild(btnStart.children[0]);
    btnStart.className = "btn btn-danger ms-5";
    let stop = document.createElement("i");
    stop.className = "bi bi-pause-circle-fill";
    btnStart.appendChild(stop);
   
    function interval(){
        setInterval(() => {
            if (parseInt(segundos.innerHTML) < 59) {
              segundos.innerHTML++;
            } else {
              segundos.innerHTML = 0;
              minutos.innerHTML++;
            }
            if (parseInt(minutos.innerHTML) === 60) {
              hora.innerHTML++;
              minutos.innerHTML = 0;
            }
          }, 1000);
          
    }
    // let parar = 0; 

    // switch (parar){
    //     case btnStart.className === "btn btn-danger ms-5":
    //     interval();
    //     break
    // }
    
  } else {
    //aqui modificamos el boton stop a start
    btnStart.removeChild(btnStart.children[0]);
    btnStart.className = "btn btn-success ms-5";
    let start = document.createElement("i");
    start.className = "bi bi-caret-right-fill";
    btnStart.appendChild(start);

  }
}
