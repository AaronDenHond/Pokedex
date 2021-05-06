//getting the pokemon data
//we need to show name, ID, image (sprite) and 4 moves
const api_url = (`https://pokeapi.co/api/v2/pokemon/1`);

async function getPokemon() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);

    const pokemon = {}; //making every pokemon an object
    pokemon["name"] = data.name;
    console.log(pokemon);
    pokemon["image"] = data.sprites.front_default;
    pokemon["id"] = data.id;
    for (i = 0 ; i < 5 ; i++) {
        pokemon["moves"[i]] = data.moves;   //werkt niet
    }
  

};

getPokemon();
