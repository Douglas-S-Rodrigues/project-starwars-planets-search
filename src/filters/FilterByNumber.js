import React, { useContext, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterByNumber() {
  const [state, setState] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const { numberFilter } = useContext(PlanetContext);

  function handleClick() {
    const { column, comparison, value } = state;
    numberFilter(column, comparison, value);
  }

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section>
      <label htmlFor="column">
        <select
          name="column"
          data-testid="column-filter"
          value={ state.column }
          onChange={ handleChange }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          name="comparison"
          data-testid="comparison-filter"
          value={ state.comparison }
          onChange={ handleChange }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input
        type="number"
        data-testid="value-filter"
        name="value"
        value={ state.value }
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        filter
      </button>
    </section>
  );
}

export default FilterByNumber;
