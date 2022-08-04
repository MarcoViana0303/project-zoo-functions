const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui

  if (!animal) {
    const animaisObjeto = data.species.reduce((acc, elemento) => {
      acc[elemento.name] = elemento.residents.length;

      return acc;
    }, {});
    return animaisObjeto;
  }
  if (Object.keys(animal[1]) === 'sex') {
    // const femea = data.species.filter((elemento) => elemento.residents.residents);
  }

  const animais = data.species.find((elemento) => elemento.name === animal.specie).residents.length;
  return animais;
}

module.exports = countAnimals;
