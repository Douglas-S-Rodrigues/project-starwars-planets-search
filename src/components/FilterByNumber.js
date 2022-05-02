import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterByNumber() {
  const {
    setFilterByNumber,
    filterByNumber,
    selected,
    setSelected,
  } = useContext(PlanetContext);

  function handleClick() {
    const { column, comparison, value } = selected;
    setFilterByNumber({ column, comparison, value });
    setSelected({
      column: 'popularion',
      comparison: 'maior que',
      value: 0,
    });
  }

  function filterEqualColumns() {
    const columns = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const columnFilter = (column) => filterByNumber.some((item) => item
      .column === column);
    const columnAccepted = columns.filter((column) => !columnFilter(column));
    return columnAccepted;
  }

  return (
    <div className="number-filter">
      <label htmlFor="column">
        <select
          name="column"
          data-testid="column-filter"
          value={ selected.column }
          onChange={ (e) => setSelected({ ...selected, column: e.target.value }) }
        >
          {filterEqualColumns().map((column) => (
            <option key={ column } value={ column }>{ column }</option>
          ))}
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          name="comparison"
          data-testid="comparison-filter"
          value={ selected.comparison }
          onChange={ (e) => setSelected({ ...selected, comparison: e.target.value }) }
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
        value={ selected.value }
        onChange={ (e) => setSelected({ ...selected, value: e.target.value }) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        filter
      </button>
    </div>
  );
}

export default FilterByNumber;
