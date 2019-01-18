const pedro = {
    nombre: 'Pedro',
    apellido: 'Conde',
    edad: 20,
    ingeniero: true,
    cocinero: true,
    cantante: false,
    dj: false,
    guitarrista: false,

}

const ana = {
    nombre: 'Ana',
    apellido: 'Suarez',
    edad: 16,
    ingeniero: false,
    cocinero: true,
    cantante: true,
    dj: false,
    guitarrista: false,

}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es: `);

    if (persona.ingeniero) {
        console.log('Ingeniero');
    } else {
        console.log('No es ingeniero')
    }

    if (persona.cocinero) {
        console.log('Cocinero');

    }
    if (persona.cantante) {
        console.log('Cantante');

    } else{
        console.log('No es cantante')
    }

    if (persona.dj) {
        console.log('Dj');

    }
    if (persona.guitarrista) {
        console.log('Guitarrista');

    }

}

//imprimirProfesiones(pedro);
//imprimirProfesiones(ana)


const MAYORIA_DE_EDAD = 18;

const esMayordeEdad = function (persona) {  //Se le asigna a una variable una funcion
    return persona.edad >= MAYORIA_DE_EDAD;

}

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayordeEdad(persona)){
        return console.log(`${persona.nombre} es mayor de edad`)
    }
    console.log(`${persona.nombre} es menor de edad`)

}

/*function imprimirSiesMayorDeEdad(persona) {
    if (esMayordeEdad(persona)) {
        return console.log(`${persona.nombre} es mayor de edad`);
    }
    console.log(`${persona.nombre} es menor de edad`);

}*/

//imprimirSiesMayorDeEdad(pedro);
//imprimirSiesMayorDeEdad(ana);