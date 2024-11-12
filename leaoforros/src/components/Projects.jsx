import React from 'react';
import '../css/project.css'

import carrosselImg1 from '../img/carrossel.png';
import carrosselImg2 from '../img/carrossel2.png';
import carrosselImg3 from '../img/carrossel3.jpeg';


const slides = [
  { img: carrosselImg1, alt: 'Slide 1', description: 'Obra de modernização de escritório' },
  { img: carrosselImg2, alt: 'Slide 2', description: 'Reforma e ampliação residencial' },
  { img: carrosselImg3, alt: 'Slide 3', description: 'Construção de nova sede comercial' },
  { img: carrosselImg1, alt: 'Slide 1', description: 'Obra de modernização de escritório' },
  { img: carrosselImg2, alt: 'Slide 2', description: 'Reforma e ampliação residencial' },
  { img: carrosselImg2, alt: 'Slide 2', description: 'Reforma e ampliação residencial' },
  { img: carrosselImg3, alt: 'Slide 3', description: 'Construção de nova sede comercial' },
  { img: carrosselImg1, alt: 'Slide 1', description: 'Obra de modernização de escritório' }
];


const ProjectCard = ({ img, alt, description }) => (
  <div className="project-card">
    <img src={img} alt={alt} className="project-card__img" />
    <div className="project-card__body">
      <p className="project-card__description">{description}</p>
    </div>
  </div>
);

const Projects = () => (
  <div className="projects poly-regular">
    {slides.map((slide, index) => (
      <ProjectCard 
        key={index} 
        img={slide.img} 
        alt={slide.alt} 
        description={slide.description} 
      />
    ))}
  </div>
);

export default Projects;