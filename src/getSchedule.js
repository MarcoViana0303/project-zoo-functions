const data = require('../data/zoo_data');

// Encontrar o elemento que contenha o nome que está no parâmetro
const monday = {
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

// separar os nomes de cada animal e coloca num array
const nomeAnimal = data.species.map((elemento) => elemento.name);

const diasDaSemana = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: [
      'lions', 'tigers',
      'bears', 'penguins',
      'otters', 'frogs',
      'snakes', 'elephants',
    ],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};
const especie = (parametro) => data.species.find((elemento) => elemento.name === parametro);
const dias = Object.keys(diasDaSemana);
const existeOuNao = (parametro) => nomeAnimal.some((elemento) => elemento.includes(parametro));
const exhibition = (parametro) => data.species.filter((animal) =>
  animal.availability.includes(parametro)).map((elemento) => elemento.name);
const dayWeekOrNo = (parametro) => dias.some((elemento) => elemento === parametro);

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    return monday;
  }

  if (dayWeekOrNo(scheduleTarget) === true) {
    const { open, close } = data.hours[scheduleTarget];
    return {
      [scheduleTarget]: {
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: exhibition(scheduleTarget),
      } };
  }

  if (!scheduleTarget || existeOuNao(scheduleTarget) === false) {
    return diasDaSemana;
  }

  return especie(scheduleTarget).availability;
}

console.log(getSchedule('Wednesday'));

module.exports = getSchedule;
