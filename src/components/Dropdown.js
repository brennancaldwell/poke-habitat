import React from 'react';
import axios from 'axios';

export default function Dropdown({ habitats, setHabitat }) {

  function selectHabitat(e) {
    setHabitat(e.target.value);
  }

  if (habitats.length === 0) return (<h2>Loading...</h2>)

  return (
    <div>
      <label for="habitats">Choose Habitat: </label>
      <select name="habitats" onChange={selectHabitat}>
        {habitats.map(location => <option value={location.id}>{location.name}</option>)}
      </select>
    </div>
  )
};