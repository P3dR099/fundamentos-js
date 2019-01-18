function  HeredadDe(prototipoHijo, prototipoPadre) {
    const fn = function () {};

    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo;
}


function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mido ${this.altura}`)
};


/*Persona.prototype.soyAlto = function () {
    if (this.altura >= 1.8){
        console.log(`${this.nombre} es alto`)
    }else { console.log(`${this.nombre} es bajo`)}
};*/
         //     |       IGUAL que lo de arriba
Persona.prototype.soyAlto = function()  {
    return this.altura > 1.8
};

    //this.altura >= 1.8 ?
    //console.log(`${this.nombre} es alto`) : console.log(`${this.nombre} es bajo`)

/*
const pedro = new Persona('Pedro', 'Conde', 1.70);
const erika = new Persona('Erika', 'Luna', 1.80);
const arturo = new Persona('Arturo', 'Perez', 1.65);*/


function Desarrollador(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

HeredadDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)

};




