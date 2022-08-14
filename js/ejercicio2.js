//Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anioDeNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioDeNacimiento = anioDeNacimiento;
  }
  mostrarGeneracion(anio) {
    if (anio >= 1930 && anio <= 1948) {
      alert(
        "Perteneces a la generación: Silent Generation (los niños de la postguerra). Tu rasgo característico es: Austeridad"
      );
    } else if (anio>= 1949 && anio<= 1968) {
      alert(
        "Perteneces a la generación: Baby Boom. Tu rasgo característico es: Ambición"
      );
    } else if (anio >= 1969 && anio <= 1980) {
      alert(
        "Perteneces a la generación: Generación X. Tu rasgo característico es: Obsesión por el éxito"
      );
    } else if (anio >= 1981 && anio <= 1993) {
      alert(
        "Perteneces a la generación: Generación Y (Milennials). Tu rasgo característico es: Frustración"
      );
    } else if (anio >= 1994 && anio <= 2010) {
      alert(
        "Perteneces a la generación: Generación Z. Tu rasgo característico es: Irreverencia"
      );
    } else {
      alert("El numero ingresado todavia no esta permitido");
      document.write("<br> El numero ingresado todava no esta permitido<br>");
    }
  }
  esMayorDeEdad(edad){
    if(edad >= 18){
        alert(`Es mayor de edad`);
    } else {
        alert(`Es menor de edad`);
    }
}
  mostrarDatos(){
    document.write(`
                <ul>
                    <li>Nombre: ${this.nombre}</li>
                    <li>Edad:${this.edad}</li>
                    <li>DNI:${this.dni}</li>
                    <li>Sexo:${this.sexo}</li>
                    <li>Peso:${this.peso} kg</li>
                    <li>Altura:${this.altura} cm</li>
                    <li>Año de Nacimiento:${this.anioDeNacimiento}</li>
                    </ul>`);
  }
}

let botonEnviar = document.getElementById('enviar');
let datos = document.getElementById('padre');

botonEnviar.addEventListener("click", enviar);



function enviar(e){
    e.preventDefault();
    nombreForm = document.getElementById('nombre').value; 
    edadForm = document.getElementById('edad').value;
    dniForm = document.getElementById('dni').value;
    sexoForm = document.getElementById('sexo').value;
    pesoForm = document.getElementById('peso').value;
    alturaForm = document.getElementById('altura').value;
    anioDeNacimientoForm = document.getElementById('anioDeNacimiento').value;
   
    let usuario = new Persona (nombreForm,edadForm,sexoForm,pesoForm,alturaForm,anioDeNacimientoForm);
    console.log(usuario);
   
    let datosUsuario = document.createElement('div');
    
    let btnGeneracion = document.createElement("button");
   
    let btnMayorEdad = document.createElement("button");
    
    btnGeneracion.className = "btn btn-outline-primary mb-3"
    btnGeneracion.innerHTML = 'Mostrar Generacion'
   
    btnMayorEdad.className = "btn btn-outline-primary mb-3 ms-3"
    btnMayorEdad.innerHTML = 'Mostrar Si es Mayor de Edad'

    datosUsuario.innerHTML = `
    <ul>
        <li>Nombre: ${nombreForm}</li>
        <li>Edad:${edadForm}</li>
        <li>DNI:${dniForm}</li>
        <li>Sexo:${sexoForm}</li>
        <li>Peso:${pesoForm}</li>
        <li>Altura:${alturaForm}</li>
        <li>Año de Nacimiento:${anioDeNacimientoForm}</li>
        </ul>`;

    datos.appendChild(datosUsuario);
    datos.appendChild(btnGeneracion);
    datos.appendChild(btnMayorEdad);
    datos.removeChild(datos.children[0])

  
    btnGeneracion.addEventListener("click", () => {usuario.mostrarGeneracion(anioDeNacimientoForm)})  
    btnMayorEdad.addEventListener("click", () => {usuario.esMayorDeEdad(edadForm)})

}

