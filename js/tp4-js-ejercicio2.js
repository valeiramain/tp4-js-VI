// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta. 

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

const cuenta = {
    nombre:'Alex',
    saldo:0.00,

    ingresar: function (importe){
        cuenta.saldo += importe
        document.writeln(`<h4>Estado de Cuenta de: ${this.nombre}</h4>`)
        document.writeln(`<p>Se depositó $ ${importe}, Saldo Actual = $ ${this.saldo}`)
    },

    extraer: function (importe){
        if (this.saldo>=importe){
            cuenta.saldo -= importe
            document.writeln(`<h4>Estado de Cuenta de: ${this.nombre}</h4>`)
            document.writeln(`<p>Se extrajo $ ${importe}, Saldo Actual = $ ${this.saldo}`)
        }else{
            document.writeln(`<p>Fondos Insuficientes. No se puede extraer $ ${importe}`)

        }
    },

    informar: function (){
        document.writeln(`<h4>Estado de Cuenta de: ${this.nombre}</h4>
                        <p>Saldo Actual: $ ${this.saldo}</p>`)
    }
}

cuenta.ingresar(10000)
cuenta.informar()
cuenta.extraer(3000)
cuenta.informar()