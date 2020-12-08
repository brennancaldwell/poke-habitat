import React from 'react';

export default function Dropdown({ habitats }) {
  if (habitats.length === 0) return (<h2>Loading...</h2>)
  return (
    <div>
      <label for="habitats">Choose Habitat: </label>
      <select name="habitats">
        {habitats.map(location => <option value={location.id}>{location.name}</option>)}
      </select>
    </div>
  )
};