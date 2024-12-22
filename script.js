//Variables
const pokeAllURL = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon';
const pokemonAPI = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/{name-or-id}'

//Funciones
async function getPokemon() {
    try {
        const response = await fetch(pokeAllURL);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

getPokemon();

//Eventos
