import React from 'react';
import '../App.css';

function Index() {
  return (
    <body>
        <div className='banner-catalogo'>
        <div className='banner-catalogo-imagen'>
          <img src="/img/plantas.jpg" alt="Imagen" />
        </div>
        <div>Catálogo de plantas</div>
      </div>


      <div className="division">
        <img src="/img/division-diaguita.jpg" alt="Imagen" />
      </div>
      <div className='gray-h2'>Comunidad diaguita</div>
      <div className='red-h1'>Kakanchic Alkota</div>
      <img className='familia' src="/img/familia-alcota.jpg" alt="Imagen" />
    </body>
  );
}

export default Index;