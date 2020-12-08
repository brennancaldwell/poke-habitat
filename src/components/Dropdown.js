import React from 'react';

export default function Dropdown({ habitats, selectHabitat, pokeSearch }) {

  if (habitats.length === 0) return (<h2>Loading...</h2>)

  return (
    <div className="searchBox">
      <label for="habitats">Choose Habitat: </label> <br />
      <select className="habitatSearch" name="habitats" onChange={selectHabitat}>
        {habitats.map(location => <option value={location.id}>{location.name}</option>)}
      </select>
      <button className="habitatSearch" onClick={pokeSearch}>Search</button>
    </div>
  )
};