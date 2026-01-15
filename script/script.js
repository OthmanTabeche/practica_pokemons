const container = document.getElementById("pokemon-container")


// Ex1
function pokemonEx1(nompokemon) {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${nompokemon}`

    fetch(endpoint)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            const pokemon = document.createElement('div')
            pokemon.classList.add('card')

            pokemon.innerHTML = 
                `<img src=${data.sprites.front_default} alt=${data.name}> <h3>${data.name}</h3>`

            container.appendChild(pokemon)
        })
        .catch((err) => {
            console.error(`Error: ${error}`)
        })

}

pokemonEx1('pikachu')
pokemonEx1('bulbasaur')