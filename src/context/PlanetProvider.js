import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchPlanets from '../services/api';

function PlanetProvider({ children }) {
  const [state, setState] = useState({
    data: [],
    planets: [],
    name: '',
    filterByNumber: [],
  });
  const [selected, setSelected] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  useEffect(() => {
    fetchPlanets().then((response) => {
      const data = response;
      setState(() => ({
        ...state,
        data,
        planets: data,
      }));
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Handlefilter = ({ target }) => {
    const { value } = target;
    setState(() => ({
      ...state,
      name: value,
      data: state.planets.filter(({ name }) => name.includes(value)),
    }));
  };

  const numberFilter = () => {
    const { planets, filterByNumber } = state;
    let data = planets;
    filterByNumber.forEach(({ column, comparison, value }) => {
      switch (comparison) {
      case 'maior que':
        data = data.filter((item) => Number(item[column]) > value);
        break;
      case 'menor que':
        data = data.filter((item) => Number(item[column]) < value);
        break;
      case 'igual a':
        data = data.filter((item) => item[column] === value);
        break;
      default:
        return null;
      }
    });
    setState(() => ({
      ...state,
      data,
    }));
  };

  useEffect(() => {
    numberFilter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.filterByNumber]);

  const setFilterByNumber = ({ column, comparison, value }) => {
    setState(() => ({
      ...state,
      filterByNumber: [
        ...state.filterByNumber,
        {
          column,
          comparison,
          value,
        },
      ],
    }));
  };

  const contextValue = {
    data: state.data,
    filterByName: { name: state.name },
    selected,
    setSelected,
    filterByNumber: state.filterByNumber,
    Handlefilter,
    setFilterByNumber,
  };

  return (
    <PlanetContext.Provider value={ contextValue }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PlanetProvider;
