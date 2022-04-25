import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';
import Table from '../components/Table';

function Home() {
  const { getPlanetInfo } = useContext(PlanetContext);

  useEffect(() => {
    getPlanetInfo();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Table />
  );
}

export default Home;
