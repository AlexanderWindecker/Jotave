import React from "react";
import SliderViewed from "./SliderViewed";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Pagination, Navigation } from "swiper";

export default function SliderViewedList({ data }) {
  return (
    <>
      <div className="text-center mt-4 mb-4">
       <div className="div-linea mt-5"></div> <h3 className="">Productos Mas Vistos</h3><div className="div-linea"></div>
        
      </div>
      
      <Swiper 
        slidesPerView={1}
        spaceBetween={2}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}        
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
        }}
        navigation={true}
        modules={[ Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item?.id}>
              <div className="container mt-5 d-flex justify-content-center">                
                  <SliderViewed
                    key={item.id}
                    id={item.id}
                    price={item.price}
                    title={item.title}
                    img={item.img}
                    category={item.category}
                    stock={item.stock}
                  />
                
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

