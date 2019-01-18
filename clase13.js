const pedro = {
    nombre:'Pedro',
    apellido: 'Conde',
    edad: 20,
    peso: 56
};

const ana = {
    nombre:'Ana',
    apellido: 'Ribas',
    edad: 14,
    peso: 40
};

console.log(`Al inicio del año ${pedro.nombre} pesa ${pedro.peso}kg`);

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;


for (let i = 1; i<=DIAS_DEL_ANO; i++){
    const random = Math.random();

    if (random < 0.25){
        // Aumenta de peso
        aumentarDePeso(pedro)
    }
    else if (random < 0.5) {
        // Adelgaza
        adelgazar(pedro)

    };
};

console.log(`Al final del año ${pedro.nombre} pesa ${pedro.peso.toFixed(1)}kg`);
