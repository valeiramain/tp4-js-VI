//Crea un objeto libro que tenga propiedades título, autor, año y género.
// Luego, escribe una función que reciba un array de libros y un género y devuelva un array con los libros de ese género usando filter.
// Usa prompt para ingresar los datos de los libros y el género.

const libros = []

// Función para agregar un libro nuevo
function agregarlibro(titulo, autor, anio, genero) {
    console.log('En agregar libro ');

    // Crear un nuevo objeto para cada libro
    const libro = {
        titulo: titulo,
        autor: autor,
        anio: anio,
        genero: genero
    };

    libros.push(libro);
    console.log(libros);
}

function mostrarDatos(libros, titulo) {
    document.writeln(`<h4>${titulo}</h4>`)
    document.writeln(`<table class="table">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Titulo</th>
            <th scope="col">Autor</th>
            <th scope="col">Año</th>
            <th scope="col">Género</th>
        </tr>
    </thead>
    <tbody>
        <tr>`)
    for (let i = 0; i < libros.length; i++) {
        document.writeln(`<th scope="row">${i + 1}</th>
                <td>${libros[i].titulo}</td>
                <td>${libros[i].autor}</td>
                <td>${libros[i].anio}</td>
                <td>${libros[i].genero}</td>`)
        document.writeln(`</tr>`)
    }
    document.writeln(`</tbody>
    </table>`)

}

function mostrarFiltro(librosFiltrados, titulo) {
    document.writeln(`<h4>${titulo}</h4>`)
    document.writeln(`<table class="table">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Titulo</th>
            <th scope="col">Autor</th>
            <th scope="col">Año</th>
            <th scope="col">Género</th>
        </tr>
    </thead>
    <tbody>
        <tr>`)
    for (let i = 0; i < librosFiltrados.length; i++) {
        document.writeln(`<th scope="row">${i + 1}</th>
                <td>${librosFiltrados[i].titulo}</td>
                <td>${librosFiltrados[i].autor}</td>
                <td>${librosFiltrados[i].anio}</td>
                <td>${librosFiltrados[i].genero}</td>`)
        document.writeln(`</tr>`)
    }
    document.writeln(`
        </tbody>
    </table>`)

}


// ingreso de libros
do {
    let titulo = prompt('Ingrese nombre del libro: ')
    let autor = prompt('Ingrese autor del libro: ')
    let anio = parseInt(prompt('Ingrese año del libro: '))
    let genero = prompt('Ingrese género del libro: ')

    if ((titulo !== '' && titulo !== null) && (autor !== '' && autor !== null) && !isNaN(anio) && (genero !== '' && genero !== null)) {
        agregarlibro(titulo, autor, anio, genero)
    } else {
        alert('Ingrese datos válidos')
    }
} while (confirm('Desea seguir agregando Libros?'))

if (libros.length > 0) {
    mostrarDatos(libros, `Libros Ingresados`)
} else {
    alert('No hay libros para mostrar')
}


// busqueda por genero
const generoBuscado = prompt("Ingrese un género a buscar: ");

if (generoBuscado !== '' && generoBuscado !== null) {
    const librosFiltrados = libros.filter((libro) => libro.genero.toLowerCase() === generoBuscado.toLowerCase());
    console.log(librosFiltrados);

    mostrarFiltro(librosFiltrados, `Libros Filtrados por género: ${generoBuscado}`)
} else {
    alert('Ingrese un género válidos')
}