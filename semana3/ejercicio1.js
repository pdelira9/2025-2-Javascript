const { ask } = require('../helpers/input');

async function main() {

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
main();