// in case if server was overloaded use this
import data from './shipments.json';
// if server is okay use this
// import * as API from 'api';
import { ShipmentsTable } from './ShipmentsTable/ShipmentsTable';
import { useState, useEffect } from 'react';

export function App() {
  // in case if server was overloaded use this
  const [shipments, setShipments] = useState(data);
  //if server is okay use this
  // const [shipments, setShipments] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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

  return (
    <>
      {error && <p>Something went wrong...</p>}
      {isLoading ? (
        'Loading'
      ) : (
        <ShipmentsTable data={shipments} onDelete={deleteShipment} />
      )}
    </>
  );
}
