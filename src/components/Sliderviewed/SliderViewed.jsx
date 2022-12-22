import React from "react";
import "./SliderViewed.css";
import { Link } from "react-router-dom";

export default function SliderViewed(props) {
  let { title, img, detail, id , category} = props;

  const urlDetalle = `/SliderViewedDetail/ ${id}-${title}`;

  return (
    <div className="card-count ">
      <div className="card-img ">
        <img className="img " src={img} alt={title} />
      </div>
      <div className="card-detail">
        <h4>{title} </h4>
        <p>{detail} </p>
        <p>{category} </p>
        <p>Consultar stock</p>
        <Link to={urlDetalle}>
          <button className="button_info">+ Info</button>
          </Link>
      </div>
    </div>
  );
}
