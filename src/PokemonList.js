import React from 'react';

export default function PokemonList({ pokemonData }) {
  return (
    <div>
      <div>PokemonList</div>
      {pokemonData.map((pokemon, i) => (
        <div key={pokemon + i}> {pokemon.pokemon} </div>
      ))}
    </div>
  );
}
