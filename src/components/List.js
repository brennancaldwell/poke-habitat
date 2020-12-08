import React from 'react';
import { pokedexUrl } from '../helpers';

export default function List({ pokemon, searchPending, searchedHabitat, habitats }) {

  const locationType = habitats.reduce((a, b) => {
    if (b.id === searchedHabitat) {
      a = b.name;
    }
    return a;
  }, '');

  let listHeader = (<div></div>);

  if (searchPending) {
    return (<div>Finding Pokémon...</div>)
  }

  if (pokemon.length > 0) {
    listHeader = (<h2>{locationType} Pokemon:</h2>)
  }

  return (
    <div>
      {listHeader}
      <div className="list">
        {pokemon.map(mon => {
          return (
            <a
              className="pokeCard"
              href={pokedexUrl(mon.name, mon.id)}
              rel="noreferrer"
              target="_blank"
            >
              {mon.name}
            </a>
          )
        })}
      </div>
    </div>
  )
}