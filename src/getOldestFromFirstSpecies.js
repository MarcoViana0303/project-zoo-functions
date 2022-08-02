const data = require('../data/zoo_data');

const idColaborador = data.employees;
function getOldestFromFirstSpecies(id) {
  const pessoaId = data.employees.find((elemento) => elemento.id.includes(id));
  const primeiroAnimal = pessoaId.responsibleFor;
  return primeiroAnimal;
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
