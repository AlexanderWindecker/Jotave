import React from "react";
import "./ItemDetail.css";

function ItemDetail({ data }) {
  return (
    <>
      {/* <div className="container">
        <ul className="navbar d-flex flex-row bd-highlight mb-3">
          <li className="nav-item active p-2 bd-highlight">
            <Link className="nav-item" aria-current="page" to="/">
              Inicio
            </Link>
          </li>
          <li className="nav-item p-2 bd-highlight">
            <Link className="nav-item" aria-current="page" to="/categoria">
              {data.category}
            </Link>
          </li>
          <li className="nav-item p-2 bd-highlight">
            <Link className="nav-item" aria-current="page" to="/">
              {data.title}
            </Link>
          </li>
        </ul>
      </div> */}
      <div className="container card mt-5 d-flex p-1">
        <div className="row g-0">
          {/* imagen */}
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 d-flex justify-content-center">
            <img
              src={data.img}
              className="img-fluid rounded-start image"
              alt={data.title}
            ></img>
          </div>
          {/* info */}
          <div className="card-body col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <h2 className="card-title fs-1 text-uppercase">{data.title} </h2>
            <p className="card-text text-uppercase">{data.detail} </p>
            <div className="">
              <p>Codigo: {data.codigo} </p>
            </div>
          </div>
          <span className="stock p-2">
            <i className="fa fa-pen"> </i>En Stock
          </span>
        </div>
        <div className="d-flex mt-5 justify-content-around">
          <div className="recommend ">
            <p>Recomendado por</p>
            <h3>Jotave</h3>
          </div>
          <div className="action">
            <button type="button">Link a wsp</button>
          </div>
        </div>
      </div>

      {/* <table class="table container mt-5">
        <thead>
          <tr>
            <th scope="col">Caracteristicas</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Marca</th>
            <td>{data.marca}</td>
          </tr>
          <tr>
            <th scope="row">Velocidades</th>
            <td>{data.velocidades} </td>
          </tr>
          <tr>
            <th scope="row">Audio</th>
            <td>{data.Audio} </td>
          </tr>
          <tr>
            <th scope="row">Conectividad</th>
            <td>{data.Conectividad} </td>
          </tr>
          <tr>
            <th scope="row">Codigo</th>
            <td>{data.Codigo} </td>
          </tr>
        </tbody>
      </table> */}
    </>
  );
}

export default ItemDetail;
