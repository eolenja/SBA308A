export async function fetchData() {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/`
    );
    const data = await response.json();
   

  } catch (error) {
    console.log(error);
  }
}
