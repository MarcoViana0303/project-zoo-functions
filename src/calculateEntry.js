const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const idade = entrants.reduce((acc, curr) => {
   return acc + curr
  }, {});

  return idade;
}

function calculateEntry(entrants) {
  // seu código aqui

}

console.log(countEntrants(entrants));

module.exports = { calculateEntry, countEntrants };
