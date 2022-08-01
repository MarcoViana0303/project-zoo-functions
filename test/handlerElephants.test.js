const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('count retorna a quantidade de elefantes', () => {
    const actual = 'count';
    const expected = 4;
    expect(handlerElephants(actual)).toBe(expected);
  });

  it('names retorna um array com a relação dos nomes de todos os elefantes', () => {
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    const actual = 'names';
    expect(handlerElephants(actual)).toEqual(expected);
  });

  it('averageAge retorna a média de idade dos elefantes', () => {
    const actual = 'averageAge';
    const expected = 10.5;
    expect(handlerElephants(actual)).toBe(expected);
  });

  it('location retorna a localização dos elefantes dentro do Zoológico', () => {
    const actual = 'location';
    const expected = 'NW';
    expect(handlerElephants(actual)).toBe(expected);
  });

  it('popularity retorna a popularidade dos elefantes', () => {
    const actual = 'popularity';
    const expected = 5;
    expect(handlerElephants(actual)).toBe(expected);
  });

  it('availability retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    const actual = 'availability';
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(handlerElephants(actual)).toEqual(expected);
  });
});
