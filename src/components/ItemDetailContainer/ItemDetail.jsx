import React from "react";
import "./ItemDetail.css";

function ItemDetail({ data }) {
  return (
    <>
    
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
            <span></span>
            <p>{data.detail2} </p>
            <span></span>
            <p>{data.detail3} </p>
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
            <img
                  src="https://i.ibb.co/brV3x78/LogoNg.png"
                  className="logofooter"
                  alt="jotave "
                />
          </div>
          <div className="action">
          <a href="https://wa.me/5491168557663?text=Hola,%20%C2%BFPuedes%20informarme%20sobre%20un%20producto?"> <button type="button">Consultar</button></a>
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
