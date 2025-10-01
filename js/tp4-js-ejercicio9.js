// 9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". 
// Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido".
// Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", 
// y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. 

class Animal {
    #nombre
    #edad
    constructor(nombre, edad) {
        this.#nombre = nombre;
        this.#edad = edad;
    }

     // Getter para nombre
    get nombre() {
        return this.#nombre;
    }

    // Setter para nombre
    set nombre(nuevoNombre) {
        if (nuevoNombre && nuevoNombre.length > 0) {
            this.#nombre = nuevoNombre;
        } else {
            console.log("El nombre no puede estar vacío.");
        }
    }

    // Getter para edad
    get edad() {
        return this.#edad;
    }

    // Setter para edad
    set edad(nuevaEdad) {
        if (nuevaEdad > 0) {
            this.#edad = nuevaEdad;
        } else {
            console.log("La edad debe ser mayor que 0.");
        }
    }

    //metodos
    emitirSonido(){
        document.writeln('Sonido del Animal')
    }
}

class Perro extends Animal {
    #sonido
    constructor (nombre, edad, sonido){
    super(nombre, edad)
        this.#sonido = sonido
    }

    get sonido(){
        return this.#sonido
    }

    set sonido(nuevoSonido){
        this.#sonido = nuevoSonido
    }

    emitirSonido(){
        document.writeln(`<p>Mi perro se llama ${this.nombre}, tiene ${this.edad} años y hace: "${this.#sonido}"</p>`)
    }

}

class Gato extends Animal {
    #sonido
    constructor (nombre, edad, sonido){
    super(nombre, edad)
        this.#sonido = sonido
    }

    get sonido(){
        return this.#sonido
    }

    set sonido(nuevoSonido){
        this.#sonido = nuevoSonido
    }

    
    emitirSonido(){
        document.writeln(`<p>Mi Gato se llama ${this.nombre}, tiene ${this.edad} años y hace: "${this.#sonido}"</p>`)

    }
}

const miPerro = new Perro('Bolt',3,'guau guau')
const miGato = new Gato('Copito',2,'miauuuuuuu')
console.log(miPerro)
console.log(miGato)

miPerro.emitirSonido()
miGato.emitirSonido()