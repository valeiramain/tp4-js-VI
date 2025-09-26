// Crea un objeto persona que contenga las propiedades nombre, edad y hobbies (los hobbies son un array de strings). 
// Luego, escribe una función que reciba un objeto persona y un nuevo hobby y añada este hobby a la lista de hobbies de la persona. 
// Finalmente, imprime los hobbies de la persona usando un bucle. Usa prompt para ingresar los datos de la persona y el nuevo hobby.

const persona = {
    nombre: '',
    edad: 0,
    hobbies: []
}

function agregarPersona(nombre, edad) {
    console.log('en agregar Persona: ')
    persona.nombre = nombre;
    persona.edad = edad;
    console.log(persona)
}

function agregarHobbie(persona, nuevoHobbie) {
    console.log('en agregar nuevo hobbie ')
    persona.hobbies.push(nuevoHobbie);
    console.log(persona)
}

function mostrarHobbies(persona) {
    console.log('en mostrar hobbie')
    console.log(persona)
    document.writeln(`<h4>Datos Persona</h4>`)
    document.writeln(`<p>Nombre: ${persona.nombre}</p>`)
    document.writeln(`<p>Edad: ${persona.edad}</p>`)
    document.writeln(`<p>Hobbies:</p>`)
    document.writeln(`<ol>`)
    for (let i = 0; i < persona.hobbies.length; i++) {
        document.writeln(`<li>${persona.hobbies[i]}</li>`)
    }
    document.writeln(`</ol>`)
}


const nombre = prompt('Ingrese nombre: ')
const edad = parseInt(prompt('Ingrese edad: '))

if ((nombre !== '' && nombre !== null) && !isNaN(edad)) {
    agregarPersona(nombre, edad)
    do {
        const nuevoHobbie = prompt('Ingrese hobbie:')
        if (nuevoHobbie !== '' && nuevoHobbie !== null) {
            agregarHobbie(persona, nuevoHobbie)
        } else {
            alert('Ingrese hobbies válidos')
        }
    } while (confirm('Desea seguir agregando hobbies?'))

    mostrarHobbies(persona)
} else {
    alert('Ingrese nombre y/o edad válidos')
}
