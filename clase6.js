/*var Pedro = {
    nombre: 'Pedro',
    apellido: 'Conde',
    edad: 18

}

var Dario = {
    nombre: 'Dario',
    apellido: 'Karminsky',
    edad: 23

}


function  imprimirNombreEnMayusculas(persona) {
    // var nombre = persona.nombre
    var {nombre} = persona
    console.log(nombre.toUpperCase())

}

imprimirNombreEnMayusculas(Pedro)
imprimirNombreEnMayusculas(Dario)
imprimirNombreEnMayusculas({nombre: 'Pepito'})
//imprimirNombreEnMayusculas({apellido: 'Gomez'}) DA ERROR PORQUE EL OBJETO NO TIENE EL ATRIBUTO APELLIDO*/

const Pedro = {
    nombre: 'Pedro',
    apellido: 'Conde',
    edad: 19,
}

const Ana = {
    nombre: 'Ana',
    apellido: 'Sanchez',
    edad: 23
}

function ImprimirNombreYEdad(persona){
    const {nombre, apellido, edad} = persona;    // ({nombre, edad} = persona, anios)
    //({nombre, edad} = Ana)

    console.log(`Hola, me llamo ${nombre} ${apellido} y tengo ${edad} años`)
}



ImprimirNombreYEdad(Pedro)
ImprimirNombreYEdad(Ana)




