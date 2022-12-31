import React from "react";

import { Link } from "react-router-dom";

export default function Item(props) {
  let { title, img, id } = props;

  const urlDetalle = `/detail/ ${id}-${title}`;

  return (
    <div className="card-count ">
      <div className="card-img ">
        <img className="img " src={img} alt={title} />
      </div>
      <div className="card-detail">
        <Link className="nav-link " to={urlDetalle}>
          <h3 className=" nav-item fs-5 text-center letra-titulo">{title} </h3>
        </Link>
      </div>
    </div>
  );
}
