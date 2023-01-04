import React from "react";
import "../Slider/Slider.css";
import { Link } from "react-router-dom";

export default function SliderViewed(props) {
  let { title, img, id } = props;

  const urlDetalle = `/SliderViewedDetail/ ${id}-${title}`;

  return (
    <div className="card-count ">
      <div className="card-img ">
        <img className="img " src={img} alt={title} />
      </div>
      <div className="card-detail m-2">
        <Link className="nav-link" to={urlDetalle}>
          <h3 className="nav-item fs-5 text-center letra-titulo">{title} </h3>
        </Link>
      </div>
    </div>
  );
}
