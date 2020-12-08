import React from 'react';
import { pokedexUrl } from '../helpers';

export default function List({ pokemon }) {
  return (
    <div>
      {pokemon.map(mon => {
        return (
          <div name="pokeCard">
            <a
              href={pokedexUrl(pokemon.id, pokemon.name)}
              rel="noreferrer"
              target="_blank">
                {pokemon.name}
              </a>
          </div>
        )
      })}
    </div>
  )
}