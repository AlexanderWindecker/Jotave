import React, { useEffect, useState } from "react";
import getItemsSlider from "../../services/MockOffer";
import SliderList from "./SliderList";

function SliderListContainer() {
  let [data, setData] = useState([]);

  useEffect(() => {
    getItemsSlider().then((respuestaDatos) => setData(respuestaDatos));
  }, []);

  return (
    <div>
      <div>
        
        <div>
          <SliderList data={data} />
          
        </div>
      </div>
    </div>
  );
}

export default SliderListContainer;
