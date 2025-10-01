//8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión",
// y los métodos "saludar" y "despedirse".
// Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y
// llama a sus métodos "saludar" y "despedirse".

class Persona{
    #nombre
    #edad
    #profesion
    constructor(nombre,edad,profesion){
        this.#nombre=nombre;
        this.#edad=edad;
        this.#profesion=profesion
    }
    get nombre() {
        return this.#nombre;
    }

    get edad() {
        return this.#edad;
    }

    get profesion() {
        return this.#profesion;
    }

    // Setters con validación
    set nombre(nuevoNombre) {
        if (nuevoNombre && nuevoNombre.length > 0) {
            this.#nombre = nuevoNombre;
        } else {
            console.log("❌ El nombre no puede estar vacío.");
        }
    }

    set edad(nuevaEdad) {
        if (nuevaEdad > 0) {
            this.#edad = nuevaEdad;
        } else {
            console.log("❌ La edad debe ser mayor que 0.");
        }
    }

    set profesion(nuevaProfesion) {
        if (nuevaProfesion && nuevaProfesion.length > 0) {
            this.#profesion = nuevaProfesion;
        } else {
            console.log("❌ La profesión no puede estar vacía.");
        }
    }

//metodos
    saludar(){
        alert(`Hola! Cómo estas? 👋, Mi nombre es ${this.#nombre}, tengo ${this.#edad} años y soy ${this.#profesion}`)
    }

    despedirse(){
        alert(`Adios, Hasta pronto! 🖐️, Mi nombre es ${this.#nombre}, tengo ${this.#edad} años y soy ${this.#profesion}`)
    }
}


const persona1 = new Persona('Juan Perez',25,'contador')
persona1.saludar()
const persona2 = new Persona('María Gonzalez',35,'actriz')
persona2.despedirse()