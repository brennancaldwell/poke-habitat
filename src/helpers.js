function terrainParse(array) {
  const habitatOptions = [];
  array.forEach(location  => {
    const name = nameParse(location.name),
          urlSplit = location.url.split('/');
    habitatOptions.push({name,
                          id: urlSplit[urlSplit.length - 2]})
  })
  return habitatOptions;
}

function nameParse(string) {
  const array = string.split('-'),
        capitalized = array.map(word => word[0].toUpperCase() + word.slice(1));

  if (capitalized.length > 1) return capitalized.join(' ');
  return capitalized[0];
}

export {
  terrainParse,
}