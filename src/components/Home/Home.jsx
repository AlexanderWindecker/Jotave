import React from 'react';
import Carousel from '../Carousel/Carousel';
import Whatsap from '../Whatsap/Whatsap';
import SliderViewedListContainer from '../Sliderviewed/SliderViewedListContainer';
import SliderListContainer from '../Slider/SliderListContainer';
import InfoWsp from '../Infowsp/InfoWsp';






const Home = () => {

   return(
        <div>

               <Carousel /> 
               <SliderViewedListContainer />
               <InfoWsp/>
               <SliderListContainer />
               <Whatsap />

            </div>
  ) 
}


export { Home } 

 

