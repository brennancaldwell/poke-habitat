function pokeParse(array) {
  const pokeOptions = [];
  array.forEach(location  => {
    const name = nameParse(location.name),
          urlSplit = location.url.split('/');
    pokeOptions.push({name,
                          id: urlSplit[urlSplit.length - 2]})
  })
  return pokeOptions;
}

function nameParse(string) {
  const array = string.split('-'),
        capitalized = array.map(word => word[0].toUpperCase() + word.slice(1));

  if (capitalized.length > 1) return capitalized.join(' ');
  return capitalized[0];
}

function pokedexUrl(name, id) {
  return `https://pokemon.gameinfo.io/en/pokemon/${id}-${name}`;
}

export {
  pokeParse,
  pokedexUrl,
}