import { createContext, useState, useEffect } from 'react';
import getItems from '../services/MockAPI';

export const AllProducts = createContext({});

const AllProductsProvider = ({ children }) => {
  const [item, setItem] = useState([]);
  const [dataFiltered, setDataFiltered] = useState([]);
  useEffect(() => {
    getItems()
      .then(response => {
        setItem(response);
        setDataFiltered(response);
      })
      .catch(console.log);
  }, []);

  return (
    <AllProducts.Provider
      value={{
        item,
        dataFiltered,
        setDataFiltered,
      }}
    >
      {children}
    </AllProducts.Provider>
  );
};

export default AllProductsProvider;
