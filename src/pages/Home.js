/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';
import Table from '../components/Table';

function Home() {
  const { getPlanetInfo } = useContext(PlanetContext);

  useEffect(() => {
    getPlanetInfo();
  });

  return (
    <Table />
  );
}

export default Home;
