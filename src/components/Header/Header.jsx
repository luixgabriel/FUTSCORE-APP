import React from 'react';
import './Header.css';
import logo from '../../assets/imgs/bola.png';

function Header() {
  return (
    <header>
      <div className="page">
        <nav className="page__menu menu">
          <img src={logo} alt="logo" />
          <ul className="menu__list r-list">
            <li className="menu__group">
              <a href="#0" className="menu__link r-link text-underlined">
                Tabelas
              </a>
            </li>
            <li className="menu__group">
              <a href="#0" className="menu__link r-link text-underlined">
                times
              </a>
            </li>
            <li className="menu__group">
              <a href="#0" className="menu__link r-link text-underlined">
                jogadores
              </a>
            </li>
            <li className="menu__group">
              <a href="#0" className="menu__link r-link text-underlined">
                partida
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
