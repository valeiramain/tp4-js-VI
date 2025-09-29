// Crea un array de objetos, donde cada objeto represente a un estudiante con propiedades nombre y nota.
// Luego, escribe una función que reciba este array y calcule la nota media de los estudiantes. 
// Usa un bucle para recorrer el array. Usa prompt para ingresar los datos de los estudiantes.

const estudiantes = []


// Función para agregar un estudiante nuevo
function agregarEstudiante(nombre, nota) {
    console.log('En agregar estudiante ');

    // Crear un nuevo objeto para cada estudiante
    const estudiante = {
        nombre: nombre,
        nota: nota
    };

    estudiantes.push(estudiante);
    console.log(estudiantes);
}

function notaMedia(estudiantes) {
    let resultado = 0
    for (let i = 0; i < estudiantes.length; i++) {
        resultado += estudiantes[i].nota
    }
    resultado = resultado/estudiantes.length
    return resultado
}

function mostrarDatos(estudiantes){
    document.writeln(`<h4>Lista de Estudiantes</h4>`)
    for (let i = 0; i < estudiantes.length; i++) {
        document.writeln(`<p> Nombre: ${estudiantes[i].nombre}        Nota: ${estudiantes[i].nota}</p>`)
    }
}


do {
    let nombre = prompt('Ingrese nombre del estudiante: ')
    let nota = parseInt(prompt('Ingrese Nota: '))

    if ((nombre !== '' && nombre !== null) && !isNaN(nota)) {
        agregarEstudiante(nombre, nota)
    } else {
        alert('Ingrese nombre y/o nota válidos')
    }
} while (confirm('Desea seguir agregando estudiantes?'))


if (estudiantes.length > 0) {
    mostrarDatos(estudiantes)
    document.writeln(`<h4>Nota Media = ${notaMedia(estudiantes)}</h4>`)
}else {
    alert("No se ingresaron estudiantes.");
}