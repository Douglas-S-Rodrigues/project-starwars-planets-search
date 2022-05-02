import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const {
    data,
  } = useContext(PlanetContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {data
          .map((planetsInfo) => (
            <tr key={ planetsInfo.name }>
              <td>{planetsInfo.name}</td>
              <td>{planetsInfo.rotation_period}</td>
              <td>{planetsInfo.orbital_period}</td>
              <td>{planetsInfo.diameter}</td>
              <td>{planetsInfo.climate}</td>
              <td>{planetsInfo.gravity}</td>
              <td>{planetsInfo.terrain}</td>
              <td>{planetsInfo.surface_water}</td>
              <td>{planetsInfo.population}</td>
              <td>{planetsInfo.films}</td>
              <td>{planetsInfo.created}</td>
              <td>{planetsInfo.ediited}</td>
              <td>{planetsInfo.url}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
