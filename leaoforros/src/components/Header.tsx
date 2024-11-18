import React from 'react';
import '../estilo/header.scss';

import logo from '../img/logo.png';
import iconLogo from '../img/iconLogo.png';

const Header: React.FC = () => {
  return (
    <header className="header poly-regular">
      <img
        srcSet={`${logo} 1024w, ${iconLogo} 768w`}
        sizes="(max-width: 768px) 100vw, 1024px"
        alt="Logo da empresa Quartzo Azul"
        className="header__logo"
      />
      
      <div className="header__content">
        <nav className="header__nav" aria-label="Menu principal">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#main__about" className="header__nav-link">
                Sobre
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#main__projects" className="header__nav-link">
                Galeria de obras
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#clients-section" className="header__nav-link">
                Nossos clientes
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="header__buttons">
          <button className="header__cta-button" aria-label="Comece agora">
            <a 
              className="header__sign-up-link" 
              href="https://wa.me/5511961482191" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Fazer um orçamento
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;