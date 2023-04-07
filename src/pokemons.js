// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(pokemons) {
    return pokemons.filter(pokemon => pokemon.type.includes("Fire"));
}
// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(pokemons) {
    let shortestPokemon = pokemons[0];
    for (let i = 1; i < pokemons.length; i++) {
      if (pokemons[i].height < shortestPokemon.height) {
        shortestPokemon = pokemons[i];
      }
    }
    return shortestPokemon.name;
}
// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(pokemonArray) {
  let candyCount = pokemonArray.map(pokemon => pokemon.candy_count || 0).reduce((acc, curr) => acc + curr, 0);
  
  return (candyCount / pokemonArray.length).toFixed(2)
}

// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(pokemonArray) {
  let images = []
  let firstTen = pokemonArray.filter(pokemon => pokemon.weaknesses.includes("Ground")).slice(0,10)
  images = firstTen.map(pokemon => pokemon.img)
  return images
}

// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(pokemonArray) {
  const minWeight = 30
  let names = pokemonArray.filter(pokemon => pokemon.weight > minWeight).map(pokemon => pokemon.name)
  return names
}
// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(pokemonArray) {
  let firstTwenty = pokemonArray.filter(pokemon => pokemon.name).sort((a, b) => a.name.localeCompare(b.name))
  if (firstTwenty.length < 20) {
    return firstTwenty
  } else {
    return firstTwenty.slice(0,20)
  }
}
// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
function strongPokemons(pokemonArray) {
  let firstFifteen = pokemonArray.filter(pokemon => pokemon.name && pokemon.weaknesses)
  if (firstFifteen.length > 15 && firstFifteen.every(pokemon => pokemon.weaknesses.length === 1)) {
    return firstFifteen.slice(0,15)
  } else {
    return firstFifteen
  }
}