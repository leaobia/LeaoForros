import { useState, useEffect } from 'react';
import '../estilo/main.scss';
import Projects from './Projects';
import Clients from './Clients';

import carrosselImg1 from '../img/carrossel.png';
import carrosselImg2 from '../img/carrossel2.png';
import carrosselImg3 from '../img/carrossel3.jpeg';

const slides = [
  { img: carrosselImg1, alt: 'Slide 1' },
  { img: carrosselImg2, alt: 'Slide 2' },
  { img: carrosselImg3, alt: 'Slide 3' },
];

const Main = () => {

  const [slideIndex, setSlideIndex] = useState(0);

  const proximoSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };
  useEffect(() => {
    const intervalId = setInterval(proximoSlide, 3000); 
    return () => clearInterval(intervalId); 
  }, []);

  return (
    <main className="main">
      <div className="main__carousel">
        <img
          src={slides[slideIndex].img} 
          alt={slides[slideIndex].alt}
          className="main__carousel-image"
        />
      </div>

      <div className="main__about poly-regular" id="main__about">
      A Leão Forros e Divisórias é uma empresa especializada em soluções para ambientes corporativos e residenciais, oferecendo produtos de alta qualidade e design personalizado. Com mais de 18 anos de experiência, garantimos conforto, estética e funcionalidade para transformar seus espaços com excelência e confiança.
      </div>

      <section className="main__projects" id='main__projects'>
        <Projects/>
        <Clients/>
      </section>
    </main>
  );
};

export default Main;