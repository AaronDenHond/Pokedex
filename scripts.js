(() => {
    //getting the pokemon data
    //we need to show name, ID, image (sprite) and 4 moves
    let api_url = `https://pokeapi.co/api/v2/pokemon/`;
    let api_urlDynamic;

    async function getPokemon() {
        const response = await fetch(api_urlDynamic);
        const data = await response.json();

        //making every pokemon an object with necessary info via API
        const pokemon = {
            name: data.name,
            id: data.id,
            image: data.sprites.front_default,
            pokeMove1: data.moves[0].move.name,
            pokeMove2: data.moves[1].move.name,
            pokeMove3: data.moves[2].move.name,
            pokeMove4: data.moves[3].move.name,

        };
        console.log(pokemon);
        /* pokemon.name = data.name;
        pokemon.id = data.id;
        pokemon.image = data.sprites.front_default; */
        /*  pokemon.moves = data.moves.slice([0],[4]);
         console.log(pokemon.moves);
         data.moves.forEach(move => {
             pokemon.move = pokemon.move + " " + move.move.name ;
         })
          */

        //trying to put poke object in html div now 
        pokeTarget = document.getElementById("target");
        pokeTarget.innerHTML = pokemon.name + " " + pokemon.id + " " + pokemon.pokeMove1 + " " + pokemon.pokeMove2 + " " + pokemon.pokeMove3 + " " + pokemon.pokeMove4;
        pokeImage = document.createElement("img");
        pokeTarget.appendChild(pokeImage);
        pokeImage.src = data.sprites.front_default;



    };

    document.getElementById("run").addEventListener("click", () => {
        pokeID = document.getElementById("inputfield").value;
        api_urlDynamic = api_url + pokeID;

        getPokemon();

    });
})();