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
              <h3>Jotave</h3>
            </div>
            <div className="action">
              <button type="button">Link a wsp</button>
            </div>
          </div>
      
      </div>
    </>
  );
}

export default SliderDetail;

/* <main>
        <div classNameName="card">
          <div classNameName="card__title">
            <div classNameName="icon">
              <Link to="#">
                <i classNameName="fa fa-arrow-left"></i>
              </Link>
            </div>
            <h3> </h3>
          </div>
          <div classNameName="card__body">
            <div classNameName="half">
              <div classNameName="featured_text">
                <h1>{data.title} </h1>

                <h3 classNameName="sub">{data.marca} </h3>
                <p classNameName="price"></p>
              </div>
              <div classNameName="image">
                <img src={data.img} alt={data.title}></img>
              </div>
            </div>
            <div classNameName="half">
              <div classNameName="description">
                <p>{data.detail} </p>
              </div>
              <span classNameName="stock">
                <i classNameName="fa fa-pen"></i> En Stock
              </span>
              
            </div>
          </div>
          <div classNameName="card__footer">
            <div classNameName="recommend">
              <p>Recomendado por</p>
              <h3>Jotave</h3>
            </div>
            <div classNameName="action">
              <button type="button">Link a wsp</button>
            </div>
          </div>
        </div>
      </main> */
