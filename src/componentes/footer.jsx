import React from 'react';
import '../App.css';

function Footer() {
  return (
    <footer>
      <div className='redes-sociales'>
      <div><i className="fa-brands fa-facebook fa-2x"></i>   Mama-quilla Madre Luna</div>
      <div><i class="fa-brands fa-whatsapp fa-2x"></i>   +56 9 5665 56665</div>
      <div><i class="fa-solid fa-envelope fa-2x"></i> contacto@mamaquilla.cl</div>
      </div>
      <div className="division">
        <img src="/img/division-diaguita.jpg" alt="Imagen" />
      </div>
    </footer>
    
  );
}

export default Footer;