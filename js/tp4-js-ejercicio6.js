// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. 
// Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

class Libro {
    #isbn
    #titulo
    #autor
    #nroPaginas
    constructor(isbn, titulo, autor, nroPaginas) {
        this.#isbn = isbn;
        this.#titulo = titulo;
        this.#autor = autor;
        this.#nroPaginas = nroPaginas
    }
    // Getters
    get isbn() {
        return this.#isbn;
    }

    get titulo() {
        return this.#titulo;
    }

    get autor() {
        return this.#autor;
    }

    get nroPaginas() {
        return this.#nroPaginas;
    }

    // Setters
    set isbn(nuevoIsbn) {
        this.#isbn = nuevoIsbn;
    }

    set titulo(nuevoTitulo) {
        this.#titulo = nuevoTitulo;
    }

    set autor(nuevoAutor) {
        this.#autor = nuevoAutor;
    }

    set nroPaginas(nuevoNroPaginas) {
        this.#nroPaginas = nuevoNroPaginas;
    }

    //metodo
    mostrarLibro(){
        document.writeln(`<p>El libro "${this.#titulo}", con ISBN ${this.#isbn}, creado por el autor ${this.#autor}, tiene páginas ${this.#nroPaginas}<p>`)
    }
}

const libro1 = new Libro('978-0307474728','Cien años de soledad','Gabriel García Márquez',417)
libro1.mostrarLibro()