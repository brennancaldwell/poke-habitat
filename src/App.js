import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [ habitats, setHabitats ] = useState('');


  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon-habitat')
        .then(data => {
          const habitatOptions = [];
          const terrain = data.data.results;
          terrain.forEach(location  => {
            const name = location.name;
            const urlSplit = location.url.split('/');
            habitatOptions.push({name,
                                  id: urlSplit[urlSplit.length - 2]})
          })
          setHabitats(habitatOptions);
        })
  },[])

  console.log(habitats);

  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
}

export default App;
