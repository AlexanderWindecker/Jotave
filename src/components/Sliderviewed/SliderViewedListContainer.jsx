import React, { useContext, useEffect, useState } from 'react';
import { AllProducts } from '../../context/AllProducts';
import getItemsSliderDos from '../../services/MockViewed';
import SliderViewedList from './SliderViewedList';

function SliderViewedListContainer() {
  let [data, setData] = useState([]);
  const { dataFiltered } = useContext(AllProducts);

  useEffect(() => {
    getItemsSliderDos().then(respuestaDatos => setData(respuestaDatos));
  }, []);

  return (
    <div>
      <div className=''>
        <div>
          <SliderViewedList data={dataFiltered} />
        </div>
      </div>
    </div>
  );
}

export default SliderViewedListContainer;
