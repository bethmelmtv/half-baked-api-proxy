import { useState } from 'react';

export default function PokemonSearch() {
  // you'll need to track your pokemon search results, the loading state, and one form field: name. For this form field, set a real initial values (like 'pikachu') so the form populates with a default value.
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonQuery, setPokemonQuery] = useState('pokemon');
  const [loading, setLoading] = useState(true);

  async function handlePokemonSubmit(e) {
    e.preventDefault();

    // set the loading state to true
    setLoading(true);
    // use fetch to make a request to your netlify pokemon function. Be sure to pass the pokemon name as a query param in the URL
    const response = await getPokemonData(pokemonQuery);
    //getPokemonData is coming from fetch/utils which is our endpoint
    // put the jsonified data in state and set the loading state to false
    setPokemonData(response.data.business);
    setLoading(false);
  }

  return (
    <section className="pokemon">
      {/* make the fetch on submit */}
      <form onSubmit={handlePokemonSubmit}>
        Search pokemon for a city
        {/* add inputs/labels for the pokemon name, using all the things we need with react forms. Don't forget to use the value property to sync this up with the default value in react state */}
        <input onChange={(e) => setPokemonQuery(e.target.value)} value={pokemonQuery} />
        <button>Get pokemon</button>
      </form>

      <h2>Pokemon List</h2>
      {pokemonData.map(({ pokemon }, i) => (
        <div key={pokemon + i}>
          <h3>{pokemon}</h3>
        </div>
      ))}
      {/* Make a PokemonList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
    </section>
  );
}
