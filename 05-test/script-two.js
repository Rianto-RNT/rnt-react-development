const fetch = require('node-fetch');

// PROMISE
const getPeoplePromise = (fetch) => {
  return fetch('https://swapi.dev/api/people/')
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      return {
        count: data.count,
        results: data.results,
      };
    });
};

// ASYNC AWAIT
const getPeopleAsyncAwait = async (fetch) => {
  const getRequest = await fetch('https://swapi.dev/api/people/');
  const data = await getRequest.json();

  //   console.log(data);

  return {
    count: data.count,
    results: data.results,
  };
};

// getPeople(fetch);

module.exports = {
  getPeoplePromise,
  getPeopleAsyncAwait,
};
