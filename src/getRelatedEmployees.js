const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const incluirId = data.employees.some((elemento) => elemento.managers.includes(id));

  return incluirId;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const incluirId = data.employees.filter((elemento) => elemento.managers.includes(managerId));
  const nomeEsobrenome = incluirId.map((elemento) => `${elemento.firstName} ${elemento.lastName}`);

  return nomeEsobrenome;
}

// console.log(getRelatedEmployees('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

module.exports = { isManager, getRelatedEmployees };
