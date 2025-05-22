<<<<<<< HEAD
=======

>>>>>>> upstream/main
const { ask } = require('../helpers/input');

async function main() {

<<<<<<< HEAD
    //     const persona = {
    //         nombre: "Rodrigo",
    //         edad: "36",
    //         profesion: "Desarrollador",
    //         hobbies: ["nadar", "futbol", "leer"],
    //         birthDate: "1988-08-08",
    //         saludar: function () {
    //             console.log(`Hola mi nombre es ${this.nombre}`);
    //         }
    //     }
    //     console.log(persona.nombre);
    //     console.log(persona.edad);
    //     console.log(persona.profesion);
    //     console.log(persona.hobbies); //[0]
    //     console.log(persona.birthDate);
    //     console.log(persona.saludar());//poner parentesis para ejecutar funcion
    // }

    const personas = ["alumno", "alumno2"];

    const alumno = {
        nombre: "Luis",
        matricula: "up090326",
        promedio: 75,
        edad: 16,
        mostrarInfo: function () {
            console.log(`Nombre: ${this.nombre} \nMatricula: ${this.matricula}\nPromedio: ${this.promedio}`);
            if (this.edad >= 18) {
                console.log("Es mayor de edad");
            } else {
                console.log("NO es mayor de edad");

            }
        }
    }
alumno.mostrarInfo();
}
=======
  const personas = [
    {
      nombre: "Claudia",
      edad: 34,
      ocupacion: "Desarrollador",
      saludar: function () {
        console.log(`Hola mi nombre es ${this.nombre}`);
      }
    },
    {
      nombre: "Carlos",
      edad: 28,
      ocupacion: "Estudiante",
      saludar: function () {
        console.log(`Hola mi nombre es ${this.nombre}`);
      }
    }
  ];

  // personas[0].saludar();
  // personas[1].saludar();

  for (let i = 0; i < personas.length; i++) {
    personas[i].saludar();
  }

  const alumno = {
    nombre: "Yei Yei",
    edad: 18,
    ocupacion: "Estudiante",
    esMayorDeEdad: function () {
      if (this.edad >= 18) { return true; }
      else { return false; }
    },
    mostrarInfo: function () {
      console.log(`Hola soy: ${this.nombre}, tengo ${this.edad}, me dedico a ser: ${this.ocupacion} `);
      if (this.esMayorDeEdad()) {
        console.log("Y SOY MAYOR DE EDAD");
      } else {
        console.log("no puedo votar");
      }
    }
  }

  alumno.mostrarInfo();

}



>>>>>>> upstream/main
main();