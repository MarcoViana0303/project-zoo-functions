const data = require('../data/zoo_data');

const entrants2 = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  // seu código aqui
  const child1 = entrants.filter((elemento) => elemento.age < 18);
  const adult1 = entrants.filter((elemento) => elemento.age >= 18 && elemento.age < 50);
  const senior1 = entrants.filter((elemento) => elemento.age >= 50);

  const teste = entrants.reduce((acc, elemento) => {
    acc.child = child1.length;
    acc.adult = adult1.length;
    acc.senior = senior1.length;
    return acc;
  }, {});

  return teste;
}

function calculateEntry(entrants) {
  // seu código aqui

  if (!entrants || Array.isArray(entrants) === false) {
    return 0;
  }

  const child = entrants.filter((elemento) => elemento.age < 18);
  const adult = entrants.filter((elemento) => elemento.age >= 18 && elemento.age < 50);
  const senior = entrants.filter((elemento) => elemento.age >= 50);
  let preco = 0;
  preco = (child.length * data.prices.child)
    + (adult.length * data.prices.adult) + (senior.length * data.prices.senior);
  return preco;
}

console.log(calculateEntry(entrants2));

module.exports = { calculateEntry, countEntrants };
