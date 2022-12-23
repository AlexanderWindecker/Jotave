import React from "react";
import "./Slider.css";
import { Link } from "react-router-dom";

export default function Slider(props) {
  let { title, img, id } = props;

  const urlDetalle = `/SliderDetail/ ${id}-${title}`;

  return (
    <div className="card-count ">
      <div className="card-img ">
        <img className="img " src={img} alt={title} />
      </div>
      <div className="border-bottom border-2 mt-4"></div>
      <div className="card-detail mt-2">
        <Link className="nav-link " to={urlDetalle}>
          <h3 className=" nav-item text-uppercase fs-6 letra-titulo">
            {title}{" "}
          </h3>
        </Link>
      </div>
    </div>
  );
}
