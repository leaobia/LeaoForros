import React from 'react';
import '../estilo/clientes.scss'

import eurofarmaLogo from '../img/eurofarma.png';
import pfizerLogo from '../img/pfizer.png';
import cacauShowLogo from '../img/cacau.png';
import warnerBrosLogo from '../img/warner.png';


const clients = [
  { img: eurofarmaLogo, alt: 'Eurofarma' },
  { img: pfizerLogo, alt: 'Pfizer' },
  { img: cacauShowLogo, alt: 'Cacau Show' },
  { img: warnerBrosLogo, alt: 'Warner Bros' },
];


const ClientCard = ({ img, alt }) => (
  <div className="client-card">
    <img src={img} alt={alt} className="client-card__img" />
  </div>
);

const Clients = () => (
  <div className="clients-section poly-regular" id='clients-section'>
    <h2 className="clients-section__title">Nossos Clientes</h2>
    <div className="clients">
      {clients.map((client, index) => (
        <ClientCard 
          key={index} 
          img={client.img} 
          alt={client.alt} 
        />
      ))}
    </div>
  </div>
);

export default Clients;