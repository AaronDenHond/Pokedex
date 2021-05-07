(() => {

    //we need to show name, ID, image (sprite) and 4 moves

    let api_url = `https://pokeapi.co/api/v2/pokemon/`;
    let api_urlDynamic;
    let api_urlSpecies;
    let api_urlEvolve;

    
    let pokeEvolveName = document.querySelector("#poke-evolve-name");
    let pokeEvolveImageFront = document.querySelector('#evolve-image');




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
        putPokemonOnHtml(pokemon);


        getDataDex();


    };

    async function getDataDex() {
        let responseDex = await fetch(api_urlSpecies)
        let dataDex = await responseDex.json();
        if (dataDex["evolves_from_species"]) {
            evolveName = dataDex["evolves_from_species"]["name"];
            api_urlEvolve = 'https://pokeapi.co/api/v2/pokemon/' + evolveName;
            pokeEvolveName.innerHTML = (`This pokemon evolves from ${evolveName}`);
            getDataEvolve()

    // ADDED THE ELSE BECAUSE IF I WENT TO IVY AND BACK TO BULBA, BULBA SHOWED UP AS AN EVOLUTION (=INCORRECT)

        } else {
            evolveName = '';
            pokeEvolveName.innerHTML = ('');
            pokeEvolveImageFront.src = ('');
        }
    }

    // FETCHING THE FETCHING THE EVOLUTION

    async function getDataEvolve() {
        let responseEvolve = await fetch(api_urlEvolve)
        let dataEvolve = await responseEvolve.json();
        pokeEvolveImageFront.src = dataEvolve.sprites["front_default"];
    }
    

    function putPokemonOnHtml(pokemon) {
        pokeTarget = document.getElementById("target");
        pokeImage = document.createElement("img");
        pokeTarget.appendChild(pokeImage);
        pokeImage.src = pokemon.image;

        pokeName = document.querySelector("#pokename");
        pokeName.innerHTML = pokemon.name.toUpperCase();

        pokemID = document.querySelector("#pokemid");
        pokemID.innerHTML = "#" + pokemon.id;

        pokemonMoves = document.getElementById("geenpokemoves");
        pokemonMoves.innerHTML = `1.${pokemon.pokeMove1.charAt(0).toUpperCase() + pokemon.pokeMove1.slice(1)} 2.${pokemon.pokeMove2.charAt(0).toUpperCase() + pokemon.pokeMove2.slice(1)} 3.${pokemon.pokeMove3.charAt(0).toUpperCase() + pokemon.pokeMove3.slice(1)} 4.${pokemon.pokeMove4.charAt(0).toUpperCase() + pokemon.pokeMove4.slice(1)}`


    }
    document.getElementById("run").addEventListener("click", () => {
        let pokeID = document.getElementById("inputfield").value;
        api_urlDynamic = api_url + pokeID;
        api_urlSpecies = 'https://pokeapi.co/api/v2/pokemon-species/' + pokeID;


        getPokemon();


    });
})();