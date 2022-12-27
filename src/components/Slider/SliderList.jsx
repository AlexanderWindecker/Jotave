import React from "react";
import Slider from "./Slider";
import "./Slider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default function SliderList({ data }) {
  return (
    <>
      <div className="text-center mt-4">
        <div className="div-linea mt-5"></div>{" "}
        <h3 className="">Productos Destacados</h3>
        <div className="div-linea"></div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={4}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item?.id}>
              <div className="container mt-5 d-flex justify-content-center">
                <Slider
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
      <span className="mb-5 bg-primary"></span>
    </>
  );
}
