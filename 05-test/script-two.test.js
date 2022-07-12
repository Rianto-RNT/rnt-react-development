const fetch = require('node-fetch');
const swapi = require('./script-two');

it('01 - Calls swapi to get people with async-await', () => {
  expect.assertions(1);
  return swapi.getPeopleAsyncAwait(fetch).then((data) => {
    expect(data.count).toEqual(82);
  });
});

it('02 - Calls swapi to get people with promise', () => {
  expect.assertions(2);
  return swapi.getPeoplePromise(fetch).then((data) => {
    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
