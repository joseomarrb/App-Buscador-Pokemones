//Variables
const pokeAllURL = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon';
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-button');
const pokeName = document.querySelector('#pokemon-name');
const pokeID = document.querySelector('#pokemon-id');
const pokeWeight = document.querySelector('#weight');
const pokeHeight = document.querySelector('#height');
const spriteContainer = document.querySelector('#sprite-container');
const typesContainer = document.querySelector('#types');
const hp = document.querySelector('#hp');
const attack = document.querySelector('#attack');
const defense = document.querySelector('#defense');
const specialAttack = document.querySelector('#special-attack');
const specialDefense = document.querySelector('#special-defense');
const speed = document.querySelector('#speed');

//Funciones
async function getPokemon(evt) {
    try {
        evt.preventDefault();
        const response = await fetch(pokeAllURL);
        const responseResults = await response.json();
        const { results } = responseResults;
        const value = searchInput.value.toLowerCase().trim();
        findPokemonId(results, value);
    } catch (error) {
        console.log(error.message);
        errorFetch();
    }
};

const findPokemonId = (pokemon, value) => {
    const index = pokemon.find(
        (poke) => poke.name === value || poke.id === Number.parseInt(value)
    );

    if (!value || !index) {
        alert('Pokémon not found');
        return;
    }

    return fetch(
        `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${value || index}`
    )
        .then((res) => res.json())
        .then((pk) => {
            cleanerFetch();

            const {
                name,
                id,
                height,
                weight,
                sprites: { front_default },
                stats,
                types,
            } = pk;

            spriteContainer.innerHTML = `<img id="sprite" src="${front_default}">`;

            pokeName.textContent = name.toUpperCase();
            pokeID.textContent = `#${id}`;
            pokeHeight.textContent = `Height: ${height}`;
            pokeWeight.textContent = `Weight: ${weight}`;

            stats.forEach((elmnt) => {
                document.querySelector(`#${elmnt.stat?.name}`).textContent =
                    elmnt.base_stat;
            });

            types.forEach((elmnt) => {
                typesContainer.innerHTML += `<span class="type ${elmnt.type.name}">${elmnt.type.name}</span>`;
            });
        })
        .catch((error) => {
            console.log(error.message);
            errorFetch();
        });
};

const cleanerFetch = () => {
    spriteContainer.innerHTML = '';
    typesContainer.innerHTML = '';
};

const errorFetch = () => {
    const messageError = 'Ha ocurrido un error';
    pokeName.innerHTML = `<span class="error">${messageError}</span>`;
};

//Eventos
searchBtn.addEventListener('click', getPokemon);
