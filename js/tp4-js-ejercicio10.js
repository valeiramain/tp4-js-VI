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
        console.log('en buscar contacto')
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

        } else {
            console.log('Avión No encontrado')
            alert('Avión No encontrado')

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
    abordar() { }

}

const aeropuertoInternacional = new Aeropuerto('Ministro Pistarini')
console.log(aeropuertoInternacional)

const avion1 = new Avion('Boeing 737', 180, 'Madrid')
aeropuertoInternacional.agregarAvion(avion1)
console.log(avion1)
const avion2 = new Avion('Airbus A320', 150, 'Barcelona')
aeropuertoInternacional.agregarAvion(avion2)
console.log(avion2)
const avion3 = new Avion('Embraer E190', 110, 'Roma')
aeropuertoInternacional.agregarAvion(avion3)
console.log(avion3)
console.log(aeropuertoInternacional)

aeropuertoInternacional.buscarAvion('Airbus A320')
aeropuertoInternacional.buscarAvion('Airbus')