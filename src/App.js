import React, { useEffect, useState } from 'react';
import Dropdown from './components/Dropdown';
import { pokeParse } from './helpers';
import axios from 'axios';
import './App.css';

function App() {
  const [ habitats, setHabitats ] = useState([]);
  const [ currentHabitat, setCurrentHabitat ] = useState('');
  const [ pokemon, setPokemon ] = useState([]);

  function selectHabitat(e) {
    setCurrentHabitat(e.target.value);
  }

  function pokeSearch() {
    axios.get(`https://pokeapi.co/api/v2/pokemon-habitat/${currentHabitat}/`)
          .then(data => {
            let pokemonOptions = pokeParse(data.data['pokemon_species']);
            setPokemon(pokemonOptions);
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

  console.log(pokemon);

  return (
    <div className="App">
      <h1>hello world</h1>
      <Dropdown
        habitats={habitats}
        selectHabitat={selectHabitat}
        currentHabitat={currentHabitat}
        pokeSearch={pokeSearch}
      />
    </div>
  );
}

export default App;
