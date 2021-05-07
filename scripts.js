(() => {

    //we need to show name, ID, image (sprite) and 4 moves

    let api_url = `https://pokeapi.co/api/v2/pokemon/`;
    let api_urlDynamic;
    

    //getting the pokemon data via API

    async function getPokemon() {
        const response = await fetch(api_urlDynamic);
        const data = await response.json();

     //making every pokemon an object with necessary info via API data
        const pokemon = {
            name: data.name,
            id: data.id,
            image: data.sprites.front_default,
            pokeMove1: data.moves[0].move.name,
            pokeMove2: data.moves[1].move.name,
            pokeMove3: data.moves[2].move.name,
            pokeMove4: data.moves[3].move.name,

        };
        
        //check evolution
       
        
      
        //trying to display pokemon object in html div now   
        pokeTarget = document.getElementById("target");
        pokeImage = document.createElement("img");
        pokeTarget.appendChild(pokeImage);
        pokeImage.src = data.sprites.front_default;

        pokeName = document.querySelector("#pokename");
        pokeName.innerHTML = pokemon.name.toUpperCase();

        pokemID = document.querySelector("#pokemid");
        pokemID.innerHTML = "#"+ pokemon.id;

        pokemonMoves = document.getElementById("geenpokemoves");
        pokemonMoves.innerHTML = `1.${pokemon.pokeMove1.charAt(0).toUpperCase() + pokemon.pokeMove1.slice(1)} 2.${pokemon.pokeMove2.charAt(0).toUpperCase() + pokemon.pokeMove2.slice(1)} 3.${pokemon.pokeMove3.charAt(0).toUpperCase() + pokemon.pokeMove3.slice(1)} 4.${pokemon.pokeMove4.charAt(0).toUpperCase() + pokemon.pokeMove4.slice(1)}`
        
       
     


    };

    document.getElementById("run").addEventListener("click", () => {
        pokeID = document.getElementById("inputfield").value;
        api_urlDynamic = api_url + pokeID;
        
        
        getPokemon();
        
        pokeImage.src = "";

    });
})();