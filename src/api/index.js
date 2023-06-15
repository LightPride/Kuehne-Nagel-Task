import axios from 'axios';

const API_KEY = '5e0b62d0';

axios.defaults.baseURL = 'https://my.api.mockaroo.com/shipments.json';

export const getShipments = async () => {
  const response = await axios.get(`?key=${API_KEY}`);
  return response.data;
};

// (In case if we want to delete data from API server too)
//  export const deleteShipments = async id => {
//   const response = await axios.detele(`${id}`);
//   return response.data;
// };
