import { createContext, useState, useEffect } from 'react';
import { getAllItem } from '../Api/getAllItem';

export const AllProducts = createContext({});

const AllProductsProvider = ({ children }) => {
  const [item, setItem] = useState([]);
  const [dataFiltered, setDataFiltered] = useState([]);

  useEffect(() => {
    const products = getAllItem();
    products.then(setItem).catch(console.log);
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
