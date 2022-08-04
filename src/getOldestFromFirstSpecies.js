const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const pessoaId = data.employees.find((elemento) => elemento.id.includes(id));
  const primeiroAnimal = pessoaId.responsibleFor.find((elemento) => elemento);
  const animalRaca = data.species.filter((elemento) => elemento.id === primeiroAnimal);
  const animal = animalRaca.map((elemento) => elemento.residents);
  const exemplo = animal.find((elemento) => elemento);
  const outroExemplo = exemplo.reduce((acc, curr) => {
    if (acc.age < curr.age) {
      return curr;
    }

    return acc;
  });

  return Object.values(outroExemplo);
}
console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));
module.exports = getOldestFromFirstSpecies;
