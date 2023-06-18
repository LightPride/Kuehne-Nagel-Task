// in case if server was overloaded use this
import data from './shipments.json';
// if server is okay use this
// import * as API from 'api';
import { ShipmentsTable } from './ShipmentsTable/ShipmentsTable';
// in case if server was overloaded use this
import { useState } from 'react';
// if server is okay use this
// import { useState, useEffect } from 'react';
import _ from 'lodash';

export function App() {
  // in case if server was overloaded use this
  const [shipments, setShipments] = useState(data);
  // if server is okay use this
  // const [shipments, setShipments] = useState([]);
  const [sort, setSort] = useState('asc');
  const [, setSortField] = useState('');
  // in case if server was overloaded use this
  const [isLoading] = useState(false);
  // if server is okay use this
  // const [isLoading, setLoading] = useState(false);
  // in case if server was overloaded use this
  const [error] = useState(false);
  // if server is okay use this
  // const [error, setError] = useState(false);

  //if server is okay use this
  // useEffect(() => {
  //   try {
  //     (async () => {
  //       setLoading(true);
  //       const shipments = await API.getShipments();
  //       setShipments(shipments);
  //       setLoading(false);
  //     })();
  //   } catch (error) {
  //     setError(true);
  //     setLoading(false);
  //   }
  // }, []);

  const deleteShipment = async orderNo => {
    // (in case if we want to delete data from API server too)
    // await API.deleteShipments(orderNo);
    setShipments(shipments.filter(shipment => shipment.orderNo !== orderNo));
  };

  const onSort = sortField => {
    const clonedShipments = shipments.concat();
    const sortType = sort === 'asc' ? 'desc' : 'asc';
    const orderedData = _.orderBy(clonedShipments, sortField, sortType);
    setShipments(orderedData);
    setSort(sortType);
    setSortField(sortField);
  };

  return (
    <>
      {error && <p>Something went wrong...</p>}
      {isLoading ? (
        'Loading'
      ) : (
        <ShipmentsTable
          data={shipments}
          onSort={onSort}
          onDelete={deleteShipment}
        />
      )}
    </>
  );
}
