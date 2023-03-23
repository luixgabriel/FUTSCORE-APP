import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/imgs/bola.png';

function Header() {
  return (
    <header>
      <div className="page">
        <nav className="page__menu menu">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <ul className="menu__list r-list">
            <li className="menu__group">
              <Link to="/times" className="menu__link r-link text-underlined">
                times
              </Link>
            </li>
            <li className="menu__group">
              <Link
                to="/jogadores"
                className="menu__link r-link text-underlined"
              >
                jogadores
              </Link>
            </li>
            <li className="menu__group">
              <a href="#0" className="menu__link r-link text-underlined">
                partida
              </a>
            </li>
            <li className="menu__group">
              <a href="#0" className="menu__link r-link text-underlined">
                Tabelas
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
