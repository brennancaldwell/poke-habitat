function terrainParse(array) {
  const habitatOptions = [];
  array.forEach(location  => {
    const name = location.name;
    const urlSplit = location.url.split('/');
    habitatOptions.push({name,
                          id: urlSplit[urlSplit.length - 2]})
  })
  return habitatOptions;
}

export {
  terrainParse
}