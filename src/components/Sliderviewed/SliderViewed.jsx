import React from "react";
import "./SliderViewed.css";
import { Link } from "react-router-dom";

export default function SliderViewed(props) {
  let { title, img, detail, id } = props;

  const urlDetalle = `/SliderViewedDetail/ ${id}-${title}`;

  return (
    <div className="card-count ">
      <div className="card-img ">
        <img className="img " src={img} alt={title} />
      </div>
      <div className="border-bottom border-2 mt-4"></div>
      <div className="card-detail mt-2">
        <Link className="nav-link " to={urlDetalle}>
          <h4 className=" nav-item text-uppercase ">{title} </h4>
        </Link>
      </div>
    </div>
  );
}
