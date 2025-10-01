// 10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, 
// esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión,
//  además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo,
//  si no lo encontró indicar con un mensaje.

// Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros.
// Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo,
//  caso contrario mostrar un mensaje que indique que el avión está lleno.

// Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos.
//  Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.

class Aeropuerto {
    #nombreAeropuerto
    #listaAviones
    constructor(nombreAeropuerto) {
        this.#nombreAeropuerto = nombreAeropuerto;
        this.#listaAviones = []
    }

    // Getters
    get nombreAeropuerto() {
        return this.#nombreAeropuerto;
    }

    get listaAviones() {
        return this.#listaAviones;
    }

    // Setters
    set nombreAeropuerto(nuevoNombre) {
        this.#nombreAeropuerto = nuevoNombre;
    }

    set listaAviones(nuevaLista) {
        if (Array.isArray(nuevaLista)) {
            this.#listaAviones = nuevaLista;
        } else {
            console.log("La lista de aviones debe ser un array.");
        }
    }

    //metodos

    agregarAvion(avion) {
        this.#listaAviones.push(avion)
    }

    buscarAvion(avionBuscado) {
        console.log('en buscar avion')
        const resultado = this.#listaAviones.find(avion =>
            avion.nombre.toLowerCase() === avionBuscado.toLowerCase()
        );
        console.log('avion buscado:')
        console.log(resultado)
        if (resultado) {
            document.writeln(`<h4>Avión Encontrado:</h4>`)
            document.writeln(`<p>Nombre:  ${resultado.nombre}</p>`)
            document.writeln(`<p>Capacidad: ${resultado.capacidad}</p>`)
            document.writeln(`<p>Destino: ${resultado.destino}</p>`)

            console.log('Avión encontrado')
            alert('Avión encontrado')

        } else {
            console.log('Avión No encontrado')
            alert('Avión No encontrado')

        }
    }


    listarAviones() {
        if (this.#listaAviones.length > 0) {
            document.writeln(`<h4>Lista de Aviones</h4>`)
            document.writeln(`<table class="table table-striped">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Capacidad</th>
            <th scope="col">Destino</th>
        </tr>
    </thead>
    <tbody>
        <tr>`)
            for (let i = 0; i < this.#listaAviones.length; i++) {
                document.writeln(`<th scope="row">${i + 1}</th>
                <td>${this.#listaAviones[i].nombre}</td>
                <td>${this.#listaAviones[i].capacidad}</td>
                <td>${this.#listaAviones[i].destino}</td>`)
                document.writeln(`</tr>`)
            }
            document.writeln(`</tbody>
    </table>`)
        } else {
            alert('No existen Aviones para listar')
        }
    }
}

class Avion {
    #nombre
    #capacidad
    #destino
    #listaPasajeros
    constructor(nombre, capacidad, destino) {
        this.#nombre = nombre;
        this.#capacidad = capacidad;
        this.#destino = destino;
        this.#listaPasajeros = []

    }
    // Getters
    get nombre() {
        return this.#nombre;
    }

    get capacidad() {
        return this.#capacidad;
    }

    get destino() {
        return this.#destino;
    }

    get listaPasajeros() {
        return this.#listaPasajeros;
    }

    // Setters
    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }

    set capacidad(nuevaCapacidad) {
        if (nuevaCapacidad >= this.#listaPasajeros.length) {
            this.#capacidad = nuevaCapacidad;
        } else {
            console.log("No se puede reducir la capacidad por debajo del número de pasajeros existentes.");
        }
    }

    set destino(nuevoDestino) {
        this.#destino = nuevoDestino;
    }

    set listaPasajeros(nuevaLista) {
        if (Array.isArray(nuevaLista)) {
            if (nuevaLista.length <= this.#capacidad) {
                this.#listaPasajeros = nuevaLista;
            } else {
                console.log("La lista de pasajeros excede la capacidad del avión.");
            }
        } else {
            console.log("La lista de pasajeros debe ser un array.");
        }
    }

    // Métodos
    abordar(nuevoPasajero) {
        console.log('en abordar')
        console.log(nuevoPasajero)
        if (this.#capacidad > this.#listaPasajeros.length) {
            this.#listaPasajeros.push(nuevoPasajero)

            document.writeln(`El pasajero ${nuevoPasajero} abordó el avión ${this.#nombre} con destino a ${this.#destino}`)
            alert(`El pasajero ${nuevoPasajero} abordó el avión ${this.#nombre} con destino a ${this.#destino}`)
        } else {
            alert('El avion está completo. No puede Abordar pasajeros')
        }
    }

}


const aeropuerto = new Aeropuerto('Aeropuerto Internacional')
console.log(aeropuerto)

do {
    const opcion = parseInt(prompt(`Selecciona una opción:
    1- Agregar Avión,
    2- Buscar Avión,
    3- Abordar Avión,
    4- Listar Aviones`))

    switch (opcion) {
        case 1:
            // 1- Agregar Avión
            const nombreAvion = prompt('Ingrese Nombre del Avión: ').toUpperCase().trim()
            const capacidadAvion = parseInt(prompt('Ingrese capacidad del Avión: '))
            const destinoAvion = prompt('Ingrese destino del Avión: ').toUpperCase().trim()

            const avion = new Avion(nombreAvion, capacidadAvion, destinoAvion)

            aeropuerto.agregarAvion(avion)
            break;

        case 2:
            // 2- Buscar Avión,
            const avionBuscado = prompt('Ingrese nombre del Avion a buscar: ').toUpperCase().trim()
            aeropuerto.buscarAvion(avionBuscado)
            break;

        case 3:
            // 3- Abordar Pasajeros
            const avionAAbordar = prompt('Ingrese nombre avión a a bordar: ').toUpperCase().trim()
            // buscar si existe el avion
            const resultado = aeropuerto.listaAviones.find(avion =>
                avion.nombre.toLowerCase() === avionAAbordar.toLowerCase()
            );

            if (resultado) {
                console.log('exist avion para abordar')
                console.log(resultado)
                
                if (resultado.listaPasajeros.length < resultado.capacidad) {
                    const nombrePasajero = prompt('Ingrese nombre del Pasajero: ').toUpperCase().trim()

                    if (nombrePasajero !== '' && nombrePasajero !== null) {
                        console.log('llama a metodo abordar')
                        resultado.abordar(nombrePasajero)
                    }
                } else {
                    alert('El avión está completo. No puede abordar pasajeros')
                }
            }
            break;

        case 4:
            aeropuerto.listarAviones()
            break;
    }
} while (confirm('Desea seguir realizando operaciones?'))