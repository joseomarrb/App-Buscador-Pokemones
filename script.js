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
const HP = document.querySelector('#hp');
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
        const value = searchInput.value.trim();
        findPokemonId(results, value);
    } catch (error) {
        console.log(error.message);
    }
}

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
            cleanerImage();
            cleanerTypes();

            const {
                name,
                id,
                height,
                weight,
                sprites: { front_default },
                stats,
                types,
            } = pk;

            const image = document.createElement('img');
            image.id = 'sprite';
            image.src = front_default;
            spriteContainer.appendChild(image);

            pokeName.textContent = name.toUpperCase();
            pokeID.textContent = `#${id}`;
            pokeHeight.textContent = `Height: ${height}`;
            pokeWeight.textContent = `Weight: ${weight}`;

            stats.forEach((elmnt) => {
                document.querySelector(`#${elmnt.stat?.name}`).textContent =
                    elmnt.base_stat;
            });

            types.forEach((elmnt) => {
                const span = document.createElement('span');
                span.classList.add('type', `${elmnt.type.name}`);
                span.textContent = `${elmnt.type.name}`;
                typesContainer.appendChild(span);
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

const cleanerImage = () => {
    while (spriteContainer.firstChild) {
        spriteContainer.removeChild(spriteContainer.firstChild);
    }
};

const cleanerTypes = () => {
    while (typesContainer.firstChild) {
        typesContainer.removeChild(typesContainer.firstChild);
    }
}

//Eventos
searchBtn.addEventListener('click', getPokemon);
