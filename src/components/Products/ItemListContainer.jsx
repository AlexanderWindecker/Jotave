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
      <div className="d-flex  ">
        <div className="p-2  p-0 mt-5 nav-vertical ">
          <ul className=" flex-column nav-vertical m-0 p-1">
            <h2 className="text-center">Categorias</h2>
            
            <li className="nav-link dropend">
              <Link
                className="nav-link dropend"                
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span> Tv´s, Audio y Video &raquo;</span>
              </Link>
              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/imagen">
                    <i className="bi bi-caret-right-fill">
                      <span>Tv´s</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/audio">
                    <i className="bi bi-caret-right-fill">
                      <span>Audio</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/monitores">
                    <i className="bi bi-caret-right-fill">
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
                <span>Climatización &raquo;</span>
              </Link>

              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/aire">
                    <i className="bi bi-caret-right-fill">
                      <span>Aire Acondicionado</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/ventilacion">
                    <i className="bi bi-caret-right-fill">
                      <span>Ventiladores</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/calefaccion">
                    <i className="bi bi-caret-right-fill">
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
                <span>Heladeras y Freezer &raquo;</span>
              </Link>

              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/heladera">
                    <i className="bi bi-caret-right-fill">
                      <span>Heladeras</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/freezer">
                    <i className="bi bi-caret-right-fill">
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
                <span>Termotanques y Calefones &raquo;</span>
              </Link>
              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/termotanques">
                    <i className="bi bi-caret-right-fill">
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
                <span>Lavado &raquo;</span>
              </Link>
              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/lavarropa">
                    <i className="bi bi-caret-right-fill">
                      <span>Lavarropas</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/secarropa">
                    <i className="bi bi-caret-right-fill">
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
                <span>Cocinas y Hornos &raquo;</span>
              </Link>
              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/cocinas">
                    <i className="bi bi-caret-right-fill">
                      <span>Cocinas</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/hornos">
                    <i className="bi bi-caret-right-fill">
                      <span>Hornos</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/microonda">
                    <i className="bi bi-caret-right-fill">
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
                <span>Pequeños Hogar &raquo;</span>
              </Link>
              <ul className="dropdown-menu submenu">                
                <li>
                  <Link className="dropdown-item" to="/categoria/aspiradoras">
                    <i className="bi bi-caret-right-fill">
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
                <span>Pequeños Cocina &raquo;</span>
              </Link>
              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/batidora">
                    <i className="bi bi-caret-right-fill">
                      <span>Batidora</span>
                    </i>
                  </Link>
                </li>                              
                <li>
                  <Link className="dropdown-item" to="/categoria/Licuadora">
                    <i className="bi bi-caret-right-fill">
                      <span>Licuadora</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/categoria/multiprocesadora"
                  >
                    <i className="bi bi-caret-right-fill">
                      <span>Multiprocesadora</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/categoria/freidora"
                  >
                    <i className="bi bi-caret-right-fill">
                      <span>Freidora</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/hornodepan">
                    <i className="bi bi-caret-right-fill">
                      <span>Horno de Pan</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/otros">
                    <i className="bi bi-caret-right-fill">
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
                <span>Celulares &raquo;</span>
              </Link>
              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/motorola">
                    <i className="bi bi-caret-right-fill">
                      <span>Motorola</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/samsung">
                    <i className="bi bi-caret-right-fill">
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
                <span>Informática &raquo;</span>
              </Link>
              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/notebook">
                    <i className="bi bi-caret-right-fill">
                      <span>Notebook</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/categoria/gabinete"
                  >
                    <i className="bi bi-caret-right-fill">
                      <span>Gabinetes</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/pc">
                    <i className="bi bi-caret-right-fill">
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
                <span>Jardín &raquo;</span>
              </Link>
              <ul className="dropdown-menu submenu">
                <li>
                  <Link className="dropdown-item" to="/categoria/bicicletas">
                    <i className="bi bi-caret-right-fill">
                      <span>Bicicletas</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/hidrolavadora">
                    <i className="bi bi-caret-right-fill">
                      <span>Hidrolavadoras</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/piletas">
                    <i className="bi bi-caret-right-fill">
                      <span>Piletas</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/cortadoras">
                    <i className="bi bi-caret-right-fill">
                      <span>Cortadoras de Pasto</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/categoria/herramienta"
                  >
                    <i className="bi bi-caret-right-fill">
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
                <span>Muebles &raquo;</span>
              </Link>
              <ul className="dropdown-menu submenu">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/categoria/mueblesdecocina"
                  >
                    <i className="bi bi-caret-right-fill">
                      <span>Muebles de Cocina</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/categoria/mueblesdeinterior"
                  >
                    <i className="bi bi-caret-right-fill">
                      <span>Muebles de Interior</span>
                    </i>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/parrillas">
                    <i className="bi bi-caret-right-fill">
                      <span>Parrillas</span>
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
