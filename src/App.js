import React, { useEffect, useState } from 'react';
import Dropdown from './components/Dropdown';
import { terrainParse } from './helpers';
import axios from 'axios';
import './App.css';

function App() {
  const [ habitats, setHabitats ] = useState('');
  const [ currentHabitat, setCurrentHabitat ] = useState('');


  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon-habitat')
        .then(data => {
          let habitatOptions = terrainParse(data.data.results);
          setHabitats(habitatOptions);
          setCurrentHabitat(habitatOptions[0].id);
        })
  },[])

  console.log(habitats, currentHabitat);

  return (
    <div className="App">
      <h1>hello world</h1>
      <Dropdown
        habitats={habitats}
        setHabitat={setCurrentHabitat}
      />
    </div>
  );
}

export default App;
