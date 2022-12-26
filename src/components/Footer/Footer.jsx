import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-white text-muted div-footer footer">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="container text-center text-md-start mt-5">
            <p>Comunicate con nosotros a traves de nuestras redes:</p>
          </div>

          <div className="container text-center text-md-start mt-5 ">
            <a
              href="https://www.instagram.com/grupojotave/"
              className="me-4 link-secondary"
            >
              <i className="bi bi-instagram"></i>
            </a>

            <a
              href="https://wa.me/5491168557663?text=Hola,%20%C2%BFPuedes%20informarme%20sobre%20un%20producto?"
              className="me-4 link-secondary"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <img
                  src="https://i.ibb.co/brV3x78/LogoNg.png"
                  className="logofooter"
                />

                <div className="link">
                  <Link className="link2" to="/nosotros">
                    Acerca de Nosotros
                  </Link>
                  <Link className="link2" to="/ayuda">
                    Preguntas Frecuentes
                  </Link>
                  <Link className="link2" to="/contacto">
                    ¿Cómo comprar?
                  </Link>
                </div>
              </div>

              <div className="col-md-3 col-lg-3 col-xl-4 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mt-0 mb-3">Contacto</h6>
                <p>
                  <i className="bi bi-house me-3 text-secondary"></i>Famatina 1784,Ituzaingo -
                  Buenos Aires, Argentina
                </p>
                <p>
                  <i className="bi bi-envelope me-3 text-secondary"></i>
                  <a
                    href="mailto:Administración@grupojotave.com"
                    className="enlace"
                  >
                    {" "}
                    Administración@grupojotave.com{" "}
                  </a>
                </p>
                <p>
                  <i className="bi bi-envelope me-3 text-secondary"></i>
                  <a href="mailto:Ventas@grupojotave.com" className="enlace">
                    {" "}
                    Ventas@grupojotave.com{" "}
                  </a>
                </p>

                <p>
                  <a
                    href="https://wa.me/5491168557663?text=Hola,%20%C2%BFPuedes%20informarme%20sobre%20un%20producto?"
                    className="me-4 link-secondary"
                  >
                    <i className="bi bi-phone me-3 text-secondary"></i> +54 9 11
                    6855 - 7663
                  </a>
                </p>
                <p>
                  <a
                    href="https://wa.me/5491125062551?text=Hola,%20%C2%BFPuedes%20informarme%20sobre%20un%20producto?"
                    className="me-4 link-secondary"
                  >
                    <i className="bi bi-phone me-3 text-secondary"></i> + 54 9
                    11 2506 - 2551
                  </a>
                </p> 
                <p>
                <i className="bi bi-stopwatch-fill"> Lunes a Viernes de 9:00 am a 15:30pm y Sábados de 9am a 13pm</i>
                </p>         
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4">
          &copy; {new Date().getFullYear()} Copyright Desarrollado por
          WindeckerWebs
        </div>
      </footer>
    </>
  );
};

export { Footer };
