import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchPlanets from '../services/api';

function PlanetProvider({ children }) {
  const [planetsInfo, setPlanetsInfo] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumbers, setFilterByNumbers] = useState([]);

  async function getPlanetInfo() {
    const planetsInfoResponse = await fetchPlanets();
    setPlanetsInfo(planetsInfoResponse);
  }
  const Handlefilter = ({ target }) => {
    const { value } = target;
    setFilterByName(value);
  };

  const numberFilter = (column, comparison, value) => {
    let planets = [];

    switch (comparison) {
    case 'maior que':
      planets = planetsInfo.filter((item) => Number(item[column]) > value);
      break;
    case 'menor que':
      planets = planetsInfo.filter((item) => Number(item[column]) < value);
      break;
    case 'igual a':
      planets = planetsInfo.filter((item) => item[column] === value);
      break;
    default: planets = planetsInfo;
    }

    setPlanetsInfo(planets);

    setFilterByNumbers([{ column, comparison, value }]);
  };

  const contextValue = {
    planetsInfo,
    getPlanetInfo,
    filterByName,
    Handlefilter,
    filterByNumbers,
    numberFilter,
  };

  return (
    <PlanetContext.Provider value={ contextValue }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
