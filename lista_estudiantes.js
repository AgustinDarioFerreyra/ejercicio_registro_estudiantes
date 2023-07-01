const mostrarListaEstudiantes = (estudiantes) => {
    console.log('Lista de estudiantes registrados: ')
    for ( let i = 0; i < estudiantes.length; i++) {
        let estudianteActual = estudiantes[i];
        console.log(`Nombre: ${estudianteActual.nombre}`)
        console.log(`Edad: ${estudianteActual.edad}`)
    }
};

module.exports = {mostrarListaEstudiantes};