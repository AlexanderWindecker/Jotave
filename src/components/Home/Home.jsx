import React from "react";
import Carousel from "../Carousel/Carousel";
import Whatsap from "../Whatsap/Whatsap";
import SliderViewedListContainer from "../Sliderviewed/SliderViewedListContainer";
import SliderListContainer from "../Slider/SliderListContainer";
import InfoWsp from "../Infowsp/InfoWsp";
//import Module1 from "../Module1/Module1";

const Home = () => {
  return (
    <div>
      <Carousel />
      <SliderViewedListContainer />
      <InfoWsp />
      {/* <Module1 /> */}
      <SliderListContainer />
      <Whatsap />
    </div>
  );
};

export { Home };
