export async function fetchData() {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/`
    );
    const data = await response.json();
   const pokeData = data.results;
    console.log(pokeData)

  } catch (error) {
    console.log(error);
  }
}
