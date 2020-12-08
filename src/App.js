import React, { useEffect, useState } from 'react';
import Dropdown from './components/Dropdown';
import List from './components/List';
import { pokeParse } from './helpers';
import axios from 'axios';
import './App.css';

function App() {
  const [ habitats, setHabitats ] = useState([]);
  const [ currentHabitat, setCurrentHabitat ] = useState('');
  const [ pokemon, setPokemon ] = useState([]);
  const [ searchPending, setSearchPending ] = useState(false);

  function selectHabitat(e) {
    setCurrentHabitat(e.target.value);
  }

  function pokeSearch() {
    setSearchPending(true);
    axios.get(`https://pokeapi.co/api/v2/pokemon-habitat/${currentHabitat}/`)
          .then(data => {
            let pokemonOptions = pokeParse(data.data['pokemon_species']);
            setPokemon(pokemonOptions);
            setSearchPending(false);
          })
  }

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon-habitat')
        .then(data => {
          let habitatOptions = pokeParse(data.data.results);
          setHabitats(habitatOptions);
          setCurrentHabitat(habitatOptions[0].id);
        })
  },[])

  return (
    <div className="App">
      <h1>Poké Habitat</h1>
      <Dropdown
        habitats={habitats}
        selectHabitat={selectHabitat}
        pokeSearch={pokeSearch}
      />
      <List
        pokemon={pokemon}
        searchPending={searchPending}
      />
    </div>
  );
}

export default App;
