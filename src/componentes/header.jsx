import React from 'react';
import '../App.css';

function Header() {
  return (
    <header>
      <div className="menu">
        <a href='catalogo' className="menu-button">Catálogo</a>
        <a href='catalogo' className="menu-button">Comunidad Diaguita</a>
        <a href='catalogo' className="menu-button">Blog</a>
        <a href='catalogo' className="menu-button">Contacto</a>
      </div>
      <div className="logo">
        <img src="/img/logo-mamaquilla.jpg" alt="Logo" />
      </div>
      <div className="division">
        <img src="/img/division-diaguita.jpg" alt="Imagen" />
      </div>
      
    </header>
  );
}

export default Header;