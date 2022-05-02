// import apiResult from './apiResult.json';

async function fetchPlanets() {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const planetsInfo = await response.json();
  return planetsInfo.results;
  // return apiResult.results;
}

export default fetchPlanets;
