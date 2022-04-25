import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchPlanets from '../services/api';

function PlanetProvider({ children }) {
  const [planetsInfo, setPlanetsInfo] = useState([]);

  async function getPlanetInfo() {
    const planetsInfoResponse = await fetchPlanets();
    setPlanetsInfo(planetsInfoResponse);
  }

  const contextValue = {
    planetsInfo,
    getPlanetInfo,
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
