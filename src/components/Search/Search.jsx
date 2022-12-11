import React, { useContext, useRef } from 'react';
import { AllProducts } from '../../context/AllProducts';

export default function Search() {
  const inputRef = useRef();

  const { item, dataFiltered, setDataFiltered } = useContext(AllProducts);
  console.log(dataFiltered);

  //funcion busqueda
  const searcher = e => {
    // console.log(inputRef?.current?.value);

    if (inputRef?.current?.value !== '') {
      const valoresFiltrado = item.filter(data =>
        data.title
          .toLowerCase()
          .includes(inputRef?.current?.value.toLocaleLowerCase())
      );
      setDataFiltered(valoresFiltrado);
    } else {
      setDataFiltered(item);
    }

    // console.log(e.target.value);
  };

  //funcion busqueda

  //metodo filtrado

  // const results = !search
  //   ? data
  //   : data.filter(data =>
  //       data.title.toLowerCase().includes(search.toLocaleLowerCase())
  //     );

  //metodo filtrado

  return (
    <form>
      <input
        ref={inputRef}
        type='text'
        onChange={searcher}
        placeholder='Search'
        className='form-control'
      />
    </form>
  );
}
