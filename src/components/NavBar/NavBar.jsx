import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import './NavBar.css';

function NavBar() {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light '>
        <a className='navbar-brand' href='/'>
          <img
            src='https://i.ibb.co/bvM0jYg/Logo-Blanco.png'
            alt=''
            className='logoNavbar'
          />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='true'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
            <li className='nav-item active'>
              <Link className='nav-link' aria-current='page' to='/'>
                Inicio
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/nosotros'>
                Nosotros
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contacto'>
                Contacto
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Productos
              </a>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li>
                  <Link className='dropdown-item' to='/todos'>
                    {' '}
                    Todos
                  </Link>
                </li>
                <li className='dropdown-divider'></li>
                <li className='nav-item dropdown'>
                  <Link
                    className='nav-link dropdown-toogle'
                    to='/categoria/Smarts, audio y video'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <span> Smarts, Audio, Video &raquo;</span>
                  </Link>
                  <ul className='dropdown-menu submenu'>
                    <li>
                      <Link className='dropdown-item' to='/categoria/tv'>
                        <span>Smarts</span>
                        <i className='bi bi-caret-down-fill'></i>
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item' to='/categoria/Audio'>
                        <span>Audio</span>
                        <i className='bi bi-caret-down-fill'></i>
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item' to='/categoria/Video'>
                        <span>Video</span>
                        <i className='bi bi-caret-down-fill'></i>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className='nav-item dropdown'>
                  <Link
                    className='nav-link dropdown-toogle'
                    to='/categoria/climatizacion'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <span> Climatización &raquo;</span>
                  </Link>

                  <ul className='dropdown-menu submenu'>
                    <li>
                      <Link className='dropdown-item' to='/categoria/aire'>
                        <span>Aire Acondicionado</span>
                        <i className='bi bi-caret-down-fill'></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className='dropdown-item'
                        to='/categoria/ventilacion'
                      >
                        <span> Ventiladores</span>
                        <i className='bi bi-caret-down-fill'></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className='dropdown-item'
                        to='/categoria/calefaccion'
                      >
                        <span>Calefactores</span>
                        <i className='bi bi-caret-down-fill'></i>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    className='dropdown-item'
                    to='/categoria/heladeras y freezer'
                  >
                    <span>Heladeras y Freezer</span>
                    <i className='bi bi-caret-down-fill'></i>
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' to='/categoria/terrmotanques'>
                    <span>Termotanques y Calefones</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className='dropdown-item'
                    to='/categoria/cocinas y hornos'
                  >
                    <span>Cocinas y Hornos</span>
                    <i className='bi bi-caret-down-fill'></i>
                  </Link>
                </li>
                <li>
                  <Link
                    className='dropdown-item'
                    to='/categoria/pequeños hogar'
                  >
                    <span>Pequeños Hogar</span>
                    <i className='bi bi-caret-down-fill'></i>
                  </Link>
                </li>
                <li>
                  <Link
                    className='dropdown-item'
                    to='/categoria/pequeños cocina'
                  >
                    <span>Pequeños Cocina</span>
                    <i className='bi bi-caret-down-fill'></i>
                  </Link>
                </li>
                <li>
                  <Link
                    className='dropdown-item'
                    to='/categoria/cuidado personal'
                  >
                    <span>Cuidado personal</span>
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' to='/categoria/informatica'>
                    <span>Informática</span>
                    <i className='bi bi-caret-down-fill'></i>
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' to='/categoria/jardin'>
                    <span>Jardín</span>
                    <i className='bi bi-caret-down-fill'></i>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          {/* <form className=' mx-auto mt-10'> */}
          {/* <input
              className='form-row mt-sm-2 p-1'
              type='search'
              placeholder='Buscar'
            />
            <button
              className='btn btn-outline-success my-sm-o p-1 mb-1'
              type='submit'
            >
              <i className='bi bi-search'></i>
            </button> */}
          <Search />
          {/* </form> */}
        </div>
      </nav>
    </>
  );
}

export { NavBar };
