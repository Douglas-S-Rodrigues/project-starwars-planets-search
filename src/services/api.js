async function fetchPlanets() {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const planetsInfo = await response.json();
  return planetsInfo.results;
}

export default fetchPlanets;
