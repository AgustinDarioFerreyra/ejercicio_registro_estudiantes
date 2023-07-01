const readlineSync = require('readline-sync');
const { mostrarListaEstudiantes } = require('./lista_estudiantes');

const registrarEstudiantes = () => {
    let registroDeEstudiantes = [];
    console.log('Iniciando Registro de Estudiantes');
    let cantidadEstudiantes = readlineSync.question('Ingresar cantidad de estudiantes a registrar: ')
    console.log(`Cantidad de Estudiantes a registrar: ${cantidadEstudiantes}`);
    for (let i = 0; i < cantidadEstudiantes; i++) {
        let nombreEstudiante = readlineSync.question(`Ingrese el nombre del estudiante ${i + 1}: `);
        let edadEstudiante = readlineSync.question(`Ingrese la edad de ${nombreEstudiante}: `);
        let estudiante = {
            nombre: nombreEstudiante,
            edad: edadEstudiante,
        }
        registroDeEstudiantes.push(estudiante);
    }
    return registroDeEstudiantes;
};

let registro = registrarEstudiantes();
mostrarListaEstudiantes(registro);