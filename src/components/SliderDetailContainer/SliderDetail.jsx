import React from "react";
import "./SliderDetail.css";

function SliderDetail({ data }) {
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
            <h5 className="card-title text-uppercase fs-1">{data.title} </h5>
            <p className="card-text">{data.detail} </p>
          </div>
          <span className="stock p-2"><i className="fa fa-pen"> </i>En Stock</span>
        </div>
        <div className="d-flex mt-5 justify-content-around">
            <div className="recommend">
              <p>Recomendado por</p>
              <img
                  src="https://i.ibb.co/brV3x78/LogoNg.png"
                  className="logofooter"
                />
            </div>
            <div className="action">
            <a href="https://wa.me/5491168557663?text=Hola,%20%C2%BFPuedes%20informarme%20sobre%20un%20producto?"> <button type="button">Consultar</button></a>
            </div>
          </div>
      
      </div>
    </>
  );
}

export default SliderDetail;

