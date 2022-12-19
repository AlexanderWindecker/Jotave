import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getItemsSingle } from "../../services/MockAPI";


function ItemDetailContainer() {
    let [data, setData] = useState({});



    const { id } = useParams();
  
    useEffect(() => {
      getItemsSingle(id).then((respuestaDatos) => {
        setData(respuestaDatos);
      });
    }, [id]);

  return (
    <div>
      <ItemDetail data={data}/>
      
    </div>
  );
}

export default ItemDetailContainer;
