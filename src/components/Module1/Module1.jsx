import React from "react";
import { Link } from "react-router-dom";
import "./Module1.css";

export default function Module1() {
  return (
    <>
      <div className="container d-flex mt-5 module1">
        <Link className="nav-link module-link " to="/categoria/aire">
          <div class="card m-3 ">
            <div class="row g-0 ">
              <div class="col-md-4 mt-n1">
                <img
                  src="../../img/aireAcondicionado.webp"
                  class="moduleImg "
                  alt="..."
                ></img>
              </div>
              <div class="col-md-8 module-body">
                <div class="card-body">
                  <h5 class="card-title">Aires acondicionados</h5>
                  <p class="card-text">
                    Tenemos el aire acondicionado especial para tu casa.
                    Encontra la mejor opcion para tu hogar en Grupo Jotave.
                    Disfruta tu hogar en todos los momentos del año.       
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Solicita tu producto</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link className="nav-link module-link " to="/categoria/imagen">
          <div class="card m-3 ">
            <div class="row g-0">
              <div class="col-md-4 mt-n1">
                <img
                  src="../../img/televisor.jpg"
                  class="moduleImg "
                  alt="..."
                ></img>
              </div>
              <div class="col-md-8 module-body">
                <div class="card-body">
                  <h5 class="card-title ms-2">Televisores</h5>
                  <p class="card-text ms-2">
                    Descubri los mejores televisores que tenemos para tu hogar.
                    Encontra la mejor opcion para tu hogar en Grupo Jotave.
                    Disfruta tu hogar en todos los momentos del año.
                  </p>
                  <p class="card-text">
                    <small class="text-muted ms-2">Solicita tu producto</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
