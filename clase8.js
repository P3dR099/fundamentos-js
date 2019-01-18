var Pedro = {
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

function cumpleanios(persona){
    return {
        ...persona,
        edad: persona.edad +1
    }
}

