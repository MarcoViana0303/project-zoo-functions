const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui

  if (!animal) {
    return data.species.reduce((acc, elemento) => {
      acc[elemento.name] = elemento.residents.length;

      return acc;
    }, {});
  }
  const animais = data.species.find((elemento) => elemento.name === animal.specie).residents;
  if (Object.keys(animal).length === 1) {
    return animais.length;
  }

  return animais.filter((elemento) => elemento.sex === animal.sex).length;
}

console.log(countAnimals({ specie: 'bears', sex: 'female' }));

module.exports = countAnimals;
