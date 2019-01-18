const pedro = {
    nombre:'Pedro',
    apellido: 'Conde',
    altura: 1.71

};

const ana = {
    nombre: 'Ana',
    apellido: 'Ribas',
    altura: 1.53

};
const laura = {
    nombre: 'Laura',
    apellido:'Rodriguez',
    altura: 1.65

};

const juan = {
    nombre: 'Juan',
    apellido:'Gomez',
    altura: 1.81

};

const personas = [pedro, ana, laura, juan];

for (var i = 0; i < personas.length; i++){
    var persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura} metros`)

}
