const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  const colaboradores = data.employees;
  const nome = colaboradores.find((elemento) => elemento.firstName
    === employeeName || elemento.lastName === employeeName);

  return nome;
}

module.exports = getEmployeeByName;
