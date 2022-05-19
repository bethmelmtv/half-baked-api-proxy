require('dotenv').config();

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
};

exports.handler = async (event, context) => {
  try {
    // grab the pokemon's name from the request's query parameters
    // here is an example from the netlify docs:
    // https://functions.netlify.com/playground/#hello%2C-%7Bname%7D

    // consult the pokedex docs
    // https://pokedex-alchemy.herokuapp.com/

    const response = await fetch(
      `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${event.queryStringParameters.pokemonName}`
      //this is netlify function calling the API
    );
    const data = await response.json();
    const json = JSON.stringify({ data });

    return {
      statusCode: 200,
      headers,
      // this is where you shoot data back to the user. right now it's sending an empty object--replace this with the pokemon data. remember, you do need to stringify it, otherwise netlify gets mad. ¯\_(ツ)_/¯
      body: JSON.stringify({}),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
