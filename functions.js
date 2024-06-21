import { searchPokemon } from "./api.js";
import { getImages } from "./dom.js";

window.onload = function() {
    promptName();
};

function promptName() {
    // Prompt user for their first name
    const firstName = prompt("Please enter your first name:");

    if (firstName) {
        // Update the h1 element with the welcome message
        const welcomeMessage = `Welcome, ${firstName}!`;
        document.querySelector('h1').textContent = welcomeMessage;
    } else {
        alert("You did not enter a name. Please try again.");
    }
}


// Function to display Pokémon data
function displayPokemonData(pokemon) {
    pokemonData.innerHTML = `
        <p><strong>Name:</strong> ${pokemon.name}</p>
        <p><strong>Height:</strong> ${pokemon.height}</p>
        <p><strong>Weight:</strong> ${pokemon.weight}</p>
        <p><strong>Abilities:</strong> ${pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    `;
}

// Event listener for search button click
searchButton.addEventListener('click', searchPokemon);









    // try{

    //     const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    //     if(!response.ok){
    //         throw new Error("Could not fetch resource");
    //     }

    //     const data = await response.json();
    //     const pokemonSprite = await data.sprites.front_default;
    //     const imgElement = document.getElementById("pokemonSprite");

    //     imgElement.src = pokemonSprite;
    //     imgElement.style.display = "block";
    // }
    // catch(error){
    //     console.error(error);
    // }


const myPromise = new Promise((resolve, reject) => {
    
})