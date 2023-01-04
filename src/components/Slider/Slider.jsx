import React from "react";
import "./Slider.css";
import { Link } from "react-router-dom";

export default function Slider(props) {
  let { title, img, id } = props;

  const urlDetalle = `/SliderDetail/ ${id}-${title}`;

  return (
    <div className="card-count">
      <div className="card-img">
        <img className="img" src={img} alt={title} />
      </div>
      <div className="card-detail m-2">
        <Link className="nav-link" to={urlDetalle}>
          <h3 className="nav-item fs-5 text-center letra-titulo">{title} </h3>
        </Link>
      </div>
    </div>
  );
}
