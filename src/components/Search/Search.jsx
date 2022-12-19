import React, { useState } from "react";
export default function Search() {


  let [data, setData] = useState([]);
  


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
    <form>
      <input
        type="text"
        value={search}
        onChange={searcher}
        placeholder="Search"
        className="form-control"
      />
      {results.map((item) => {
        return (
          <>
            key={item.id}
            id={item.id}
            price={item.price}
            title={item.title}
            img={item.img}
            category={item.category}
            stock={item.stock}
          </>
        );
      })}{" "} 
    </form>
  );
}
