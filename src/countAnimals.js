const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const especies = data.species;
  if (!animal) {
    const animaisObjeto = especies.reduce((acc, elemento) => {
      acc[elemento.name] = elemento.residents.length;

      return acc;
    }, {});
    return animaisObjeto;
  }
}

console.log(countAnimals());
module.exports = countAnimals;
