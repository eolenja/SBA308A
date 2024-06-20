import { fetchData } from "./api.js";
import { getImages } from "./dom.js";


const data = fetchData()
const images = getImages()




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