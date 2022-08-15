let agregarTarea = document.getElementById("tareaNueva");
let sinTareas = document.getElementById("sinTareas");
let listaPadre = document.getElementById('listaPadre');

agregarTarea.addEventListener('submit',agregar);

function agregar(e){
  e.preventDefault();
  let tareaNueva = document.getElementById("tareaAgregar").value;
  let itemLista = document.createElement('li'); 
  itemLista.innerHTML = tareaNueva;
  itemLista.className = 'col-sm-10'
  let btnBorrar = document.createElement('button');
  btnBorrar.innerHTML = 'Borrar'
  btnBorrar.className = 'btn btn-danger col-sm-1 mb-2'

  
  console.log(itemLista)
  if (listaPadre.hasChildNodes){
    sinTareas.className = 'ocultar';
    listaPadre.appendChild(btnBorrar);
    listaPadre.appendChild(itemLista);
    document.getElementById("tareaAgregar").value = '';
    }
    
}
