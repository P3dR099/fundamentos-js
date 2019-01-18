 class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    saludar() {   // Metodo saludar, como parte de la clase Persona
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }


    soyAlto() {
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}, soy desarrollador y mido ${this.altura}`)

    }

}



