import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import getItems, { getItemsByCategory } from "../../services/MockAPI";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Item.css";

function ItemListContainer() {
  let [data, setData] = useState([]);

  const { cat } = useParams();

  useEffect(() => {
    if (cat === undefined) {
      getItems().then((respuestaDatos) => setData(respuestaDatos));
    } else {
      getItemsByCategory(cat).then((respuestaDatos) => setData(respuestaDatos));
    }
  }, [cat]);

  return (
    <>
      <div className="d-flex col-12 ">
        <div className="p-0 mt-5 nav-vertical ">
          <ul className="flex-column nav-vertical p-0 m-0">
            <h2 className="text-center">Categorias</h2>

            <li className="nav-link dropend">
              <Link
                className="nav-link dropend"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span><i class="bi bi-tv"></i> Tv´s, Audio y Video &raquo;</span>
              </Link>
              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/imagen">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Tv´s</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/audio">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Audio</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/monitores">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Monitores</span>
                    </i>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-link dropend">
              <Link
                className="nav-link dropend"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span><i class="bi bi-thermometer-low"></i> Climatización &raquo;</span>
              </Link>

              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/aire">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Aire Acondicionado</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/ventilacion">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Ventiladores</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/calefaccion">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Calefactores</span>
                    </i>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-link dropend">
              <Link
                className="nav-link dropdown-toogle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span><i class="bi bi-snow"></i> Heladeras y Freezer &raquo;</span>
              </Link>

              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/heladera">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Heladeras</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/freezer">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Freezer</span>
                    </i>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-link dropend">
              <Link
                className="nav-link dropdown-toogle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span><i class="bi bi-droplet"></i> Termotanques y Calefones &raquo;</span>
              </Link>
              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/termotanques">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Termotanques</span>
                    </i>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-link dropend">
              <Link
                className="nav-link dropdown-toogle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span><i class="bi bi-sun"></i> Lavado &raquo;</span>
              </Link>
              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/lavarropa">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Lavarropas</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/secarropa">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Secarropas</span>
                    </i>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-link dropend">
              <Link
                className="nav-link dropdown-toogle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span><i class="bi bi-fire"></i> Cocinas y Hornos &raquo;</span>
              </Link>
              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/cocinas">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Cocinas</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/hornos">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Hornos</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/microonda">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Microondas</span>
                    </i>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-link dropend">
              <Link
                className="nav-link dropdown-toogle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span><i class="bi bi-plug"></i> Pequeños Hogar &raquo;</span>
              </Link>
              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/aspiradora">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Aspiradoras</span>
                    </i>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-link dropend">
              <Link
                className="nav-link dropdown-toogle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span><i class="bi bi-window"></i> Pequeños Cocina &raquo;</span>
              </Link>
              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/batidora">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Batidora</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/Licuadora">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Licuadora</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/categoria/multiprocesadora"
                  >
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Multiprocesadora</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/freidora">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Freidora</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/hornodepan">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Horno de Pan</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/otros">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Otros</span>
                    </i>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-link dropend">
              <Link
                className="nav-link dropdown-toogle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span><i class="bi bi-phone "></i> Celulares &raquo;</span>
              </Link>
              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/motorola">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Motorola</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/samsung">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Samsung</span>
                    </i>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-link dropend">
              <Link
                className="nav-link dropdown-toogle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span><i class="bi bi-pc-display"></i> Informática &raquo;</span>
              </Link>
              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/notebook">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Notebook</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/gabinete">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Gabinetes</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/pc">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>PC</span>
                    </i>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-link dropend">
              <Link
                className="nav-link dropdown-toogle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span><i class="bi bi-flower2"></i> Jardín &raquo;</span>
              </Link>
              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/bicicletas">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Bicicletas</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/hidrolavadora">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Hidrolavadoras</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/piletas">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Piletas</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/cortadoras">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Cortadoras de Pasto</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/herramienta">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Herramientas</span>
                    </i>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-link dropend">
              <Link
                className="nav-link dropdown-toogle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span><i className="bi bi-house"></i> Muebles &raquo;</span>
              </Link>
              <ul className="dropdown-menu submenu">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/categoria/mueblesdecocina"
                  >
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Muebles de Cocina</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/categoria/mueblesdeinterior"
                  >
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Muebles de Interior</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/parrillas">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Parrillas</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/colchones">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Colchones</span>
                    </i>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-link dropend">
              <Link
                className="nav-link dropdown-toogle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span><i className="bi bi-bicycle"></i> Motos &raquo;</span>
              </Link>
              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/moto">
                    <i className="bi bi-caret-right-fill text-start">
                      <span>Motos</span>
                    </i>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="container-fluid m-0">
          <ItemList data={data} />
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;
