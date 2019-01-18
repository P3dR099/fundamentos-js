const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true};

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $
            .get(url, opts, function (data) {
                resolve(data)
            })
            .fail(() => reject(id))

    })
}

function onError(id){
    console.log(`Sucedio un error al obtener un personaje ${id}`)
}

async function obtenerPersonajes() {
    const ids = [1,2,3,4,5,6,7];
    const promesas = ids.map(id => obtenerPersonaje(id));

    try{
        const personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id) {
        onError(id)
    }

}

obtenerPersonajes();

/*let promesas = ids.map(function (id){
    return obtenerPersonaje(id)
});
const ids = [1,2,3,4,5,6,7];
let promesas = ids.map(id => obtenerPersonaje(id));
Promise
        .all(promesas)
        .then(personajes => console.log(personajes))
        .catch(onError)*/

