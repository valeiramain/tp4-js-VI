//3-Escribe una clase que permita crear distintos objetos “rectángulos”, 
// con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo {
    #alto;
    #ancho;
    constructor(alto, ancho) {
        this.#alto = alto,
            this.#ancho = ancho
    }

    //getter y setter
    get alto() {
        return this.#alto;
    }

    get ancho() {
        return this.#ancho;
    }

    set alto(nuevoAlto) {
        this.#alto = nuevoAlto;
    }

    set ancho(nuevoAncho) {
        this.#ancho = nuevoAncho;
    }

    //metodos

    calcularPerimetro() {
        const perimetro = 2 * (this.#alto + this.#ancho)
        document.writeln(`<p>El Perimetro del rectangulo con Alto = ${this.#alto} y Ancho = ${this.#ancho} es igual a ${perimetro}</p>`)
    }

    calcularArea() {
        const area = this.#alto * this.#ancho
        document.writeln(`<p>El Perimetro para Alto = ${this.#alto} y Ancho = ${this.#ancho} es igual a ${area}</p>`)
    }
}

const rectangulo1 = new Rectangulo(23, 66.5)
rectangulo1.calcularArea()
rectangulo1.calcularPerimetro()

const rectangulo2 = new Rectangulo(35,87)
rectangulo2.calcularArea()
rectangulo2.calcularPerimetro()