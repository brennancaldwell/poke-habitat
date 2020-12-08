import React, { useEffect, useState } from 'react';
import Dropdown from './components/Dropdown';
import { terrainParse } from './helpers';
import axios from 'axios';
import './App.css';

function App() {
  const [ habitats, setHabitats ] = useState('');


  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon-habitat')
        .then(data => setHabitats(terrainParse(data.data.results)))
  },[])

  console.log(habitats);

  return (
    <div className="App">
      <h1>hello world</h1>
      <Dropdown />
    </div>
  );
}

export default App;
