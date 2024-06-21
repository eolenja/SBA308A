export async function searchPokemon() {
    const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
    const pokemonInput = document.getElementById('pokemonInput');
    const searchButton = document.getElementById('searchButton');
    const pokemonData = document.getElementById('pokemonData');
    
    
    async function searchPokemon() {
        const pokemonNameOrId = pokemonInput.value.toLowerCase().trim();
        const apiUrl = `${BASE_URL}${pokemonNameOrId}`;
    
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Pokémon not found!');
            }
            const pokemon = await response.json();
            displayPokemonData(pokemon);
        } catch (error) {
            console.error('Error fetching Pokémon:', error);
            alert('Pokémon not found! Please enter a valid name or ID.');
        }
    }
}