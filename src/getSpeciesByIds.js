const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const especies = data.species;
  return especies.filter((elemento) => ids.find((element) => element === elemento.id));
}

module.exports = getSpeciesByIds;
