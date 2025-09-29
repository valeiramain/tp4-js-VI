//Crea un objeto libro que tenga propiedades título, autor, año y género.
// Luego, escribe una función que reciba un array de libros y un género y devuelva un array con los libros de ese género usando filter.
// Usa prompt para ingresar los datos de los libros y el género.

const libros = []

// Función para agregar un estudiante nuevo
function agregarlibro(titulo,autor,anio,genero) {
    console.log('En agregar libro ');

    // Crear un nuevo objeto para cada estudiante
    const libro = {
        titulo: titulo,
        autor: autor,
        anio: anio,
        genero: genero
    };

    libros.push(libro);
    console.log(libros);
}

do {
    let titulo = prompt('Ingrese nombre del libro: ')
    let autor = prompt('Ingrese autor del libro: ')
    let anio = parseInt(prompt('Ingrese año del libro: '))
    let genero = prompt('Ingrese género del libro: ')

    if ((titulo !== '' && titulo !== null) && (autor !== '' && autor !== null) &&!isNaN(anio) && (genero !== '' && genero !== null)) {
        agregarlibro(titulo,autor,anio,genero)
    } else {
        alert('Ingrese datos válidos')
    }
} while (confirm('Desea seguir agregando Librow?'))
