import React, { useContext, useRef } from 'react';
import { AllProducts } from '../../context/AllProducts';

export default function Search() {
  const inputRef = useRef();
  const { item, setDataFiltered } = useContext(AllProducts);

  //funcion busqueda
  const searcher = () => {
    const inputValue = inputRef?.current?.value;
    const valoresFiltrado = item.filter(data =>
      data.title
        .toLowerCase()
        .includes(inputRef?.current?.value.toLocaleLowerCase())
    );

    inputValue.length > 0
      ? setDataFiltered(valoresFiltrado)
      : setDataFiltered(item);
  };

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
