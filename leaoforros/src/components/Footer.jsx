import React from 'react';

import '../css/footer.css'
import whatsapp from '../img/whatsapp.webp'

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer poly-regular">
      <div className="footer__content">
        <div className="footer__item">
          <h3>Endereço</h3>
          <p>Rua Maranduva, 110, Vale do Sol, Jandira, SP</p>
        </div>

        <div className="footer__item">
          <h3>Fale Conosco</h3>
          <a
            href="https://wa.me/5511961482191" 
            target="_blank"
            rel="noopener noreferrer"
            className="footer__whatsapp-link"
          >
            <img src={whatsapp} alt="WhatsApp" className="footer__whatsapp-icon" />
            WhatsApp
          </a>
        </div>

        <div className="footer__item">
          <button className="footer__back-to-top" onClick={scrollToTop}>
            Voltar ao Topo
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;