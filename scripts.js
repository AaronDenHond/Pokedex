//getting the pokemon data
//we need to show name, ID, image (sprite) and 4 moves
const api_url = (`https://pokeapi.co/api/v2/pokemon/1`);

async function getPokemon() {
    const response = await fetch(api_url);
    const data = await response.json();
   
//making every pokemon an object with necessary info via API
    const pokemon = {
        name: data.name,
        id: data.id,
        image: data.sprites.front_default
        
    }; 
    console.log(pokemon);
    /* pokemon.name = data.name;
    pokemon.id = data.id;
    pokemon.image = data.sprites.front_default; */
    pokemon.moves = data.moves.slice([0],[4]);
    console.log(pokemon.moves);
    data.moves.forEach(move => {
        pokemon.move = pokemon.move + " " + move.move.name ;
    })
    
    
//trying to put poke object in html div now 
    pokeTarget = document.getElementById("target");
    pokeTarget.innerHTML = pokemon.name + " " + pokemon.id  ;
    pokeImage = document.createElement("img");
    pokeTarget.appendChild(pokeImage);
    pokeImage.src = data.sprites.front_default;
    
    
};

getPokemon();
