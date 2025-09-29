// Crea un objeto alumno con propiedades nombre, curso y calificaciones (un array de números). 
// Escribe una función que reciba un objeto alumno y un número, y que añada la calificación al array de calificaciones del alumno.
// Usa un bucle para calcular la calificación más alta del alumno 
// y un switch para clasificar al alumno según su calificación más alta (A para 9-10, B para 7-8, C para 5-6, D para 0-4).

const alumno = {
    nombre: '',
    curso: '',
    calificacion: []
};

function agregarAlumno(nombre, curso) {
    alumno.nombre = nombre
    alumno.curso = curso
}

function agregarCalificacion(alumno, calificacion) {
    alumno.calificacion.push(calificacion);
    console.log(alumno)
}

function mostrarDatos(alumno) {
    document.writeln(`<h4>Datos del Alumno</h4>`)
    document.writeln(`<p>Nombre: ${alumno.nombre}</p>`)
    document.writeln(`<p>Curso: ${alumno.curso}</p>`)
    document.writeln(`<p>Calificaciones:</p>`)
    document.writeln(`<ul>`)
    for (let i = 0; i < alumno.calificacion.length; i++) {
        document.writeln(`<li>${alumno.calificacion[i]}</li>`)
    }
    document.writeln(`</ul>`)
}

function clasificarAlumno(alumno) {
    // ... spread operator se usa con arrays
    const notaMaxima = Math.max(...alumno.calificacion);
    console.log("La nota más alta es:", notaMaxima);
    document.writeln(`<p>La nota más alta es: ${notaMaxima}</p>`)

    // clasificar al alumno según su calificación más alta (A para 9-10, B para 7-8, C para 5-6, D para 0-4).

    switch (true) {
        case (notaMaxima >= 9 && notaMaxima <= 10):
            document.writeln(`<h5>La calificación es: "A"</h5>`)
            break;
        case (notaMaxima >= 7 && notaMaxima <= 8):
            document.writeln(`<h5>La calificación es: "B"</h5>`)
            break;
        case (notaMaxima >= 5 && notaMaxima <= 6):
            document.writeln(`<h5>La calificación es: "C"</h5>`)
            break;
        case (notaMaxima >= 0 && notaMaxima <= 4):
            document.writeln(`<h5>La calificación es: "D"</h5>`)
            break;
        default:
            document.writeln('Datos insuficientes')
            break;
    }

  
}

// ingreso de alumnos
let nombre = prompt('Ingrese nombre del alumno: ')
let curso = prompt('Ingrese curso del alumno: ')

if ((nombre !== '' && nombre !== null) && (curso !== '' && curso !== null)) {
    agregarAlumno(nombre, curso)
    do {
        let calificacion = parseInt(prompt('Ingrese calificación del alumno: '))
        if (!isNaN(calificacion)) {
            agregarCalificacion(alumno, calificacion)
        } else {
            alert('Ingrese calificación de 0 a 10')
        }
    } while (confirm('Desea seguir agregando calificaciones?'))

   
    if (alumno.calificacion.length > 0) {
        mostrarDatos(alumno)
        clasificarAlumno(alumno)
    } else {
        alert('No hay calificaciones para mostrar')
    }

} else {
    alert('Ingrese datos válidos')
}


