const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const especies = data.species;
  const animais = especies.find((elemento) => elemento.name === animal);
  const animaisIdade = animais.residents;
  const verdadeiroFalso = animaisIdade.every((element) => element.age > age);

  return verdadeiroFalso;
}

module.exports = getAnimalsOlderThan;
