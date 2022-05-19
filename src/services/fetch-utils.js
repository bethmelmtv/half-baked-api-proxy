//these are our netlify functions
// not sure how these are connected to netlify. where did we grab the url in line 5 again?

async function getPokemonData(searchFilter) {
  console.log(searchFilter);
  const rawResponse = await fetch(`/.netlify/functions/pokemons?pokemonName=${searchFilter}`);
  //this is where i call my netlify functon // front end to netlify function
  //why is the slash coming before the dot in line 2?
  //where is searchFilter coming in from line 2?
  const data = await rawResponse.json();
  //what does .json() do? why is it a function?

  return data;
}

async function getYelpData(searchFilter) {
  const rawResponse = await fetch(`/.netlify/function/yelp?searchFilter=${searchFilter}`);
  const data = await rawResponse.json();

  return data;
}

async function getWeatherData(searchFilter) {
  const rawResponse = await fetch(`/.netlify/functions/weather?searchFilter=${searchFilter}`);
  //searchFilter in lines 19 are by chance// where are these search filters coming from again?
  const data = await rawResponse.json();

  return data;
}
