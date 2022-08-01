const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const incluirId = data.employees.some((elemento) => elemento.managers.includes(id));

  return incluirId;
}

function getRelatedEmployees(managerId) {
  // seu código aqui

  const incluirId = data.employees.filter((elemento) => elemento.managers.includes(managerId));
  const nomeEsobrenome = incluirId.map((elemento) => `${elemento.firstName} ${elemento.lastName}`);
  const ehGerente = data.employees.some((elemento) => elemento.managers.includes(managerId));

  if (ehGerente === true) {
    return nomeEsobrenome;
  }

  try {
    if (ehGerente === false) {
      throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
    }
  } catch (error) {
    console.error(error.message);
  }
}
getRelatedEmployees('4b40a139-d4dc-4f09-822d-ec25e819a5ad');

module.exports = { isManager, getRelatedEmployees };
