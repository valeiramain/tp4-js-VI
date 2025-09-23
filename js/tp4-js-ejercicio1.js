// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. 
// Crea los métodos necesarios para permitir encender y apagar el auto.

// Output:



// objeto.encender();
// objeto.apadar()
// auto encendido
// El auto se apagó


const auto = {
    color:'',
    marca:'',
    modelo:'',
    encendido:false,

    encender: function () {
        if (this.encendido){
            alert(`El auto se encontraba encendido`)
        }else{
            this.encendido = true
            alert(`Auto encendido`)
        }
    },

    apagar: function () {
        if (this.encendido){
            this.encendido = false
            alert(`El auto se apagó`)
        }else{
            alert(`El auto se encontraba apagado`)
        }
    }
}


do{
    const operacion = parseInt(prompt('Qué operación desea realizar? 1-encender auto 2-apagar auto'))
    console.log(auto)

    switch(operacion){
        case 1:
            auto.encender()
            break;
        case 2:
            auto.apagar()
            break;
        default:
            alert('Ingrese una opción válida')        
            break;
    }

}while (confirm('Desea continuar encendiendo/apagando el auto?'))