//Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anoDeNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anoDeNacimiento = anoDeNacimiento;
  }
  mostrarGeneracion() {
    if (this.anoDeNacimiento >= 1930 && this.anoDeNacimiento <= 1948) {
      document.write(
        "Perteneces a la generación: Silent Generation (los niños de la postguerra). Tu rasgo característico es: Austeridad"
      );
    } else if (this.anoDeNacimiento >= 1949 && this.anoDeNacimiento <= 1968) {
      document.write(
        "Perteneces a la generación: Baby Boom. Tu rasgo característico es: Ambición"
      );
    } else if (this.anoDeNacimiento >= 1969 && this.anoDeNacimiento <= 1980) {
      document.write(
        "Perteneces a la generación: Generación X. Tu rasgo característico es: Obsesión por el éxito"
      );
    } else if (this.anoDeNacimiento >= 1981 && this.anoDeNacimiento <= 1993) {
      document.write(
        "Perteneces a la generación: Generación Y (Milennials). Tu rasgo característico es: Frustración"
      );
    } else if (this.anoDeNacimiento >= 1994 && this.anoDeNacimiento <= 2010) {
      document.write(
        "Perteneces a la generación: Generación Z. Tu rasgo característico es: Irreverencia"
      );
    } else {
      alert("El numero ingresado todavia no esta permitido");
      document.write("<br> El numero ingresado todava no esta permitido<br>");
    }
  }
  mostrarDatos() {
    document.write(`
                <ul>
                    <li>Nombre: ${this.nombre}</li>
                    <li>Edad:${this.edad}</li>
                    <li>DNI:${this.dni}</li>
                    <li>Sexo:${this.sexo}</li>
                    <li>Peso:${this.peso}</li>
                    <li>Altura:${this.altura}</li>
                    <li>Año de Nacimiento:${this.anoDeNacimiento}</li>
                    </ul>`);
  }
  mostrarDatos() {
    document.write(`
                <ul>
                    <li>Nombre: ${this.nombre}</li>
                    <li>Edad:${this.edad}</li>
                    <li>DNI:${this.dni}</li>
                    <li>Sexo:${this.sexo}</li>
                    <li>Peso:${this.peso}</li>
                    <li>Altura:${this.altura}</li>
                    <li>Año de Nacimiento:${this.anoDeNacimiento}</li>
                    </ul>`);
  }
}
