var nombre = 'Pedro'  // ESTA VAR ES DE ALCANCE GLOBAL

function  imprimirNombreEnMayusculas(nombre) { //SE DECLARA NUEVA VAR PARA NO CAMBIAR EL VALOR DE LA VAR NOMBRE-GLOBAL

    nombre = nombre.toUpperCase() // ESTA VAR ES DE ALCANCE LOCAL
    console.log(nombre)

}

imprimirNombreEnMayusculas(nombre)