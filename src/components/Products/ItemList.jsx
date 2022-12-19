import React, { useState } from "react";
import Item from "./Item";


export default function ItemList({ data }) {

  const [search, setSearch] = useState("");

  //funcion busqueda
    const searcher = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  //funcion busqueda

  //metodo filtrado

   const results = !search
    ? data
    : data.filter((data) =>
        data.title.toLowerCase().includes(search.toLocaleLowerCase())
      );

  //metodo filtrado

 

  return (
    <div className="container mt-5">
      <div className=" d-flex g-3 row">
      <input
          type="text"
          value={search}
          onChange={searcher}
          placeholder="Buscar productos"
          className="form-control"
        />
        {results.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              price={item.price}
              title={item.title}
              img={item.img}
              category={item.category}
              stock={item.stock}
            />
          );
        })}
      </div>
    </div>
  );
}
