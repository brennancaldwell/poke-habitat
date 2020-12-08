import React from 'react';
import { pokedexUrl } from '../helpers';

export default function List({ pokemon, searchPending }) {

  if (searchPending) {
    return (<div>Finding Pokemon...</div>)
  }

  return (
    <div className="list">
      {pokemon.map(mon => {
        return (
            <a
              className="pokeCard"
              href={pokedexUrl(mon.name, mon.id)}
              rel="noreferrer"
              target="_blank">
                {mon.name}
            </a>
        )
      })}
    </div>
  )
}