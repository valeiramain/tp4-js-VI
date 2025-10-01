// 7- Nos piden realizar una agenda telefónica de contactos.

// Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

// Una agenda de contactos está formada por un conjunto de contactos.
// Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

// Los métodos de la agenda serán los siguientes:

// aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
// existeContacto(Contacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.

// Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, 
// las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.


class Contacto {
    #nombre
    #telefono
    constructor(nombre, telefeno) {
        this.#nombre = nombre;
        this.#telefono = telefeno;
    }
    // Getters
    get nombre() {
        return this.#nombre;
    }

    get telefono() {
        return this.#telefono;
    }

    // Setters
    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }

    set telefono(nuevoTelefono) {
        this.#telefono = nuevoTelefono;
    }

    // metodos


}

class Agenda {
    #capacidad
    #contactos
    constructor(capacidad = 10) {
        this.#capacidad = capacidad;
        this.#contactos = [];
    }

    get capacidad() {
        return this.#capacidad
    }

    get contactos() {
        return this.#contactos
    }

    set capacidad(nuevaCapacidad) {
        this.#capacidad = nuevaCapacidad
    }

    set contactos(nuevosContactos) {
        this.#contactos = nuevosContactos
    }

    //metodos
    aniadirContacto(contacto) {
        console.log('en aniadirContacto')
        this.#contactos.push(contacto)
    }

    existeContacto(contactoExistente) {
        console.log('en existe contacto')
        const existe = this.#contactos.some(contacto =>
            contacto.nombre.toLowerCase() === contactoExistente.toLowerCase()
        );
        if (existe) {
            console.log('El contacto sí existe en la Agenda')
            alert('El contacto sí existe en la Agenda')
        } else {
            console.log('El contacto No existe en la Agenda')
            alert('El contacto No existe en la Agenda')

        }
    }

    listarContactos() {
        if (this.#contactos.length > 0) {
            document.writeln(`<h4>Agenda de Contactos</h4>`)
            document.writeln(`<table class="table table-striped">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Teléfono</th>
        </tr>
    </thead>
    <tbody>
        <tr>`)
            for (let i = 0; i < this.#contactos.length; i++) {
                document.writeln(`<th scope="row">${i + 1}</th>
                <td>${this.#contactos[i].nombre}</td>
                <td>${this.#contactos[i].telefono}</td>`)
                document.writeln(`</tr>`)
            }
            document.writeln(`</tbody>
    </table>`)
        } else {
            alert('No existen contactos para listar')
        }
    }

    buscarContacto(nombreBuscado) {
        console.log('en buscar contacto')
        const resultado = this.#contactos.find(contacto =>
            contacto.nombre.toLowerCase() === nombreBuscado.toLowerCase()
        );
        console.log('Contacto buscado:')
        console.log(resultado)
        if (resultado) {
            document.writeln(`<h4>Contacto Buscado:</h4>`)
            document.writeln(`<p>Nombre:  ${resultado.nombre}</p>`)
            document.writeln(`<p>Teléfono: ${resultado.telefono}</p>`)

            console.log('El contacto sí se encontró en la Agenda')
            alert(`El contacto sí se encontró en la Agenda`)
        } else {
            console.log('El contacto No se encuentra en la Agenda')
            alert('El contacto No se encuentra en la Agenda')

        }
    }

    eliminarContacto(contactoAEliminar) {
        const index = this.#contactos.findIndex(
            contacto => contacto.nombre.toLowerCase() === contactoAEliminar.toLowerCase()
        );

        if (index !== -1) {
            this.#contactos.splice(index, 1);
            console.log(`Contacto ${contactoAEliminar} eliminado`);
            console.log(this.#contactos)
            alert(`Contacto ${contactoAEliminar} eliminado`);
            document.writeln(`Contacto ${contactoAEliminar} eliminado`);
        } else {
            console.log(`Contacto ${contactoAEliminar} no encontrado`);
            alert(`Contacto ${contactoAEliminar} no encontrado`);
            document.writeln(`Contacto ${contactoAEliminar} no encontrado`);
        }
    }

    agendaLlena() {
        if (this.#contactos.length === this.#capacidad) {
            alert('AGENDA LLENA!: La agenda no puede almacenar más contactos')
            console.log('AGENDA LLENA!: La agenda no puede almacenar más contactos')
            document.writeln(`<p>AGENDA LLENA!: La agenda no puede almacenar más contactos</p>`)
        } else {
            alert(`LA AGENDA NO ESTÁ LLENA. Quedan ${this.#capacidad - this.#contactos.length} lugar(es) disponible(s)`)
            console.log(`LA AGENDA NO ESTÁ LLENA. Quedan ${this.#capacidad - this.#contactos.length} lugare(s) disponible(s)`)
            document.writeln(`<p>LA AGENDA NO ESTÁ LLENA. Quedan ${this.#capacidad - this.#contactos.length} lugar(es) disponible(s)</p>`)
        }
    }

    huecosLibres() { }
}


// pide al usuario capacidad de la agencia
const capacidadAgenda = parseInt(prompt('Ingresa el tamaño de la Agenda: '))

if (!isNaN(capacidadAgenda)) {
    //crear agenda
    const agendaNueva = new Agenda(capacidadAgenda)
    console.log(agendaNueva)

    do {
        const opcion = parseInt(prompt(`Selecciona una opción:
    1- Añadir contacto,
    2- Existe Contacto,
    3- Listar Contacto,
    4- Buscar Contacto,
    5- Eliminar contacto,
    6- Agenda Llena,
    7- Huecos Libres`))

        switch (opcion) {
            case 1:
                //1- Añadir contacto
                if (agendaNueva.contactos.length < agendaNueva.capacidad) {
                    const nombreContacto = prompt('Ingrese nombre del contacto:').toUpperCase().trim()
                    const telefonoContacto = parseInt(prompt('Ingrese telefono del contacto:'))

                    if ((nombreContacto !== '' && nombreContacto !== null) && (!isNaN(telefonoContacto))) {
                        const contacto = new Contacto(nombreContacto, telefonoContacto)
                        agendaNueva.aniadirContacto(contacto)
                    }
                } else {
                    alert('La agenda no puede almacenar más contactos')
                }
                break;
            case 2:
                //2- Existe Contacto
                const contactoExistente = prompt('Ingrese Contacto que sea saber si existe:').toUpperCase().trim()
                if (contactoExistente !== '' && contactoExistente !== null) {
                    agendaNueva.existeContacto(contactoExistente)
                }
                break;
            case 3:
                // 3- Listar Contacto
                agendaNueva.listarContactos()
                break;
            case 4:
                // 4- Buscar Contacto
                const contactoBuscado = prompt('Ingrese Contacto a Buscar:').toUpperCase().trim()
                if (contactoBuscado !== '' && contactoBuscado !== null) {
                    agendaNueva.buscarContacto(contactoBuscado)
                }
                break;
            case 5:
                // 5- Eliminar contacto
                const contactoAEliminar = prompt('Ingrese Contacto a Eliminar:').toUpperCase().trim()
                if (contactoAEliminar !== '' && contactoAEliminar !== null) {
                    agendaNueva.eliminarContacto(contactoAEliminar)
                }
                break;
            case 6:
                //  6- Agenda Llena
                agendaNueva.agendaLlena()

                break;
            case 7:
                // 7- Huecos Libres
                break;
        }
    } while (confirm(`Desea continuar realizando operaciones?`))
} else {
    alert('Debe definir la capacidad de la Agenda.')
}
