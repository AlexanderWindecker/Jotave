import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

export default function Item(props) {
  let { title, img, detail, id } = props;

  const urlDetalle = `/detail/ ${id}-${title}`;

  return (
    <div className="card-count ">
      <div className="card-img">
        <img className="img" src={img} alt={title} />
      </div>
      <div className="card-detail mt-2">
        <h4 className="titulo text-uppercase">{title} </h4>

        <p>{detail} </p>

        <Link className="nav-link" to={urlDetalle}>
          <button className="button_info mt-5">+ Info</button>
        </Link>
      </div>
    </div>
  );
}
