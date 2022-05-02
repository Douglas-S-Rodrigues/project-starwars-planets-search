/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Table from '../components/Table';
import FilterByName from '../filters/FilterByName';
import FilterByNumber from '../components/FilterByNumber';

function Home() {
  return (
    <>
      <FilterByName />
      <FilterByNumber />
      <Table />
    </>
  );
}

export default Home;
