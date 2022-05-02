import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterByName() {
  const { filterByName: { name }, Handlefilter } = useContext(PlanetContext);
  return (
    <input
      type="text"
      data-testid="name-filter"
      value={ name }
      onChange={ Handlefilter }
    />
  );
}

export default FilterByName;
