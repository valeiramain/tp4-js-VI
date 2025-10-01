// 4- Escribe una clase Producto para crear objetos. 
// Estos objetos, deben presentar las propiedades código, nombre y precio, 
// además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto{
    #codigo;
    #nombre;
    #precio
    constructor(codigo,nombre,precio){
        this.#codigo=codigo,
        this.#nombre=nombre,
        this.#precio=precio
    }

    // propiedades privadas: getter y setter

    get codigo(){
        return this.#codigo
    }

    get nombre(){
        return this.#nombre
    }

    get precio(){
        return this.#precio
    }

    set codigo(nuevoCodigo){
        this.#codigo=nuevoCodigo
    }

    set nombre(nuevoNombre){
        this.#nombre=nuevoNombre
    }

    set precio(nuevoPrecio){
        this.#precio=nuevoPrecio
    }

    //metodos
    imprimeDatos(){
        console.log('en imprime datos')
        document.writeln(`<h5>Datos del Producto:</h5>`)
        document.writeln(`<ul>
            <li>Código: ${this.#codigo}</li>
            <li>Nombre: ${this.#nombre}</li>
            <li>Precio: ${this.#precio}</li>
            </ul>`)
    }
}

function mostrarDatos(productos) {
    document.writeln(`<h4>Array de Productos</h4>`)
    document.writeln(`<table class="table">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Código</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
        </tr>
    </thead>
    <tbody>
        <tr>`)
    for (let i = 0; i < productos.length; i++) {
        document.writeln(`<th scope="row">${i + 1}</th>
                <td>${productos[i].codigo}</td>
                <td>${productos[i].nombre}</td>
                <td>${productos[i].precio}</td>`)
        document.writeln(`</tr>`)
    }
    document.writeln(`</tbody>
    </table>`)

}

const productos = []

const producto1 = new Producto('1001','antena starlink',151200)
productos.push(producto1)
console.log(productos)
producto1.imprimeDatos()


const producto2 = new Producto('1002','heladera ElectroLux',799999)
productos.push(producto2)
console.log(productos)
producto2.imprimeDatos()

const producto3 = new Producto('1003','tv UHD 4k samsumg 55"',999999)
productos.push(producto3)
console.log(productos)
producto3.imprimeDatos()

mostrarDatos(productos)
