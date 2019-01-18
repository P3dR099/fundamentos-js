const pedro = {
  nombre: 'Pedro',
  apellido: 'Conde',
  edad: 20,
  ingeniero: true,
  cocinero: true,
  cantante: false,
  dj: false,
  guitarrista: false,

};

const ana = {
  nombre: 'Ana',
  apellido: 'Suarez',
  edad: 16,
  ingeniero: false,
  cocinero: true,
  cantante: true,
  dj: false,
  guitarrista: false,
};

/*const esMayordeEdad = function (persona) {  //Se le asigna a una variable una funcion
    return persona.edad >= MAYORIA_DE_EDAD;
};*/
const MAYORIA_DE_EDAD = 18;

const esMayordeEdad = ({
  edad
}) => edad >= MAYORIA_DE_EDAD;

// IGUAL que la de arriba, con => se entiende que persona es una funcion, se puede quitar parentersis
// Se puede quitar el return si la funcion solo retorna un valor


//const acceso = (personal) => esMayordeEdad(personal) ? console.log('pase usted'): console.log('acceso denegado')

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayordeEdad(persona)) {
    return console.log(`${persona.nombre} es mayor de edad`);
  }
  console.log(`${persona.nombre} es menor de edad`);
}

function permitirAcceso(persona) {
  if (!esMayordeEdad(persona)) { // "!" NIEGA la condicion siguiente
    console.log("ACCESO DENEGADO");

  }
}
//const permitirAcceso = persona => console.log(`${!esMayordeEdad(persona) ? 'ACCESO DENEGADO':''}`);
