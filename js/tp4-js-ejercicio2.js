// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta. 

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.


class Cuenta {
    #titular;
    #saldo;
    constructor(titular) {
        this.#titular = titular;
        this.#saldo = 0.00
    }

    // getters y setters

    get getTitular() {
        return this.#titular
    }

    get getSaldo() {
        return this.#saldo
    }

    set setTitular(nuevoTitular) {
        this.#titular = nuevoTitular;
    }

    set setSaldo(nuevoSaldo) {
        this.#saldo = nuevoSaldo;
    }

    // metodos
    ingresar(importe) {
        console.log('en ingresar()')
        this.#saldo += importe
        console.log(alex)
        document.writeln(`<h4>Estado de Cuenta de: ${this.#titular}</h4>`)
        document.writeln(`<p>Se depositó $ ${importe}, Saldo Actual = $ ${this.#saldo}`)

    };
    extraer(importe) {
        console.log('en extraer()')
        if (this.#saldo >= importe) {
            this.#saldo -= importe
            console.log(alex)
            document.writeln(`<h4>Estado de Cuenta de: ${this.#titular}</h4>`)
            document.writeln(`<p>Se extrajo $ ${importe}, Saldo Actual = $ ${this.#saldo}`)
        } else {
            alert('No hay fondos para realizar la extracción')
        }
    };

    informar() {
        console.log('en informar()')
        document.writeln(`<h4>Estado de Cuenta de: ${this.#titular}</h4>`)
        document.writeln(`<p>Saldo Actual = $ ${this.#saldo}`)
    };

}


// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
const alex = new Cuenta('Alex', 0.00)

do {
    const operacion = parseInt(prompt(`Seleccione operación a realizar: 1-Deposito, 2-Extracción, 3-Consulta Saldo: `))
    let importe = 0;
    switch (operacion) {
        case 1:
            // Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
            importe = parseFloat(prompt(`Ingrese importe a depositar: `))
            if (importe > 0) {
                alex.ingresar(importe)
            } else {
                alert('Ingrese importe mayor a 0.00')
            }
            break
        case 2:
            // Un método extraer() que permita retirar la cantidad pasada como parámetro.
            importe = parseFloat(prompt(`Ingrese importe a extraer: `))
            if (importe > 0) {
                alex.extraer(importe)
            } else {
                alert('Ingrese importe mayor a 0.00')
            }
            break
        case 3:
            // Un método informar() que retorne la información del estado de la cuenta.
            alex.informar()
            break
        default:
            alert('operación inválida')
            break
    }
} while (confirm('Desea realizar otra operación?'))






//===========================================================================
// const cuenta = {
//     nombre:'Alex',
//     saldo:0.00,

//     ingresar: function (importe){
//         cuenta.saldo += importe
//         document.writeln(`<h4>Estado de Cuenta de: ${this.nombre}</h4>`)
//         document.writeln(`<p>Se depositó $ ${importe}, Saldo Actual = $ ${this.saldo}`)
//     },

//     extraer: function (importe){
//         if (this.saldo>=importe){
//             cuenta.saldo -= importe
//             document.writeln(`<h4>Estado de Cuenta de: ${this.nombre}</h4>`)
//             document.writeln(`<p>Se extrajo $ ${importe}, Saldo Actual = $ ${this.saldo}`)
//         }else{
//             document.writeln(`<p>Fondos Insuficientes. No se puede extraer $ ${importe}`)

//         }
//     },

//     informar: function (){
//         document.writeln(`<h4>Estado de Cuenta de: ${this.nombre}</h4>
//                         <p>Saldo Actual: $ ${this.saldo}</p>`)
//     }
// }

// cuenta.ingresar(10000)
// cuenta.informar()
// cuenta.extraer(3000)
// cuenta.informar()