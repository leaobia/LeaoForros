import React from 'react';
import '../estilo/project.scss';

import carrosselImg1 from '../img/carrossel.png';
import carrosselImg2 from '../img/carrossel2.png';
import carrosselImg3 from '../img/carrossel3.jpeg';
import carrosselImg4 from '../img/carrossel4.jpg';
import carrosselImg5 from '../img/carrossel5.png';
import carrosselImg6 from '../img/carrossel6.webp';
import carrosselImg7 from '../img/carrossel7.jpg';
import carrosselImg8 from '../img/carrossel8.webp';

interface Slide {
  img: string;
  alt: string;
  description: string;
}

const slides: Slide[] = [
  { img: carrosselImg1, alt: 'Slide 1', description: 'Transformação de ambiente corporativo moderno' },
  { img: carrosselImg2, alt: 'Slide 2', description: 'Reforma completa e expansão de residência' },
  { img: carrosselImg3, alt: 'Slide 3', description: 'Desenvolvimento de nova infraestrutura empresarial' },
  { img: carrosselImg4, alt: 'Slide 4', description: 'Reestruturação de espaço de trabalho inovador' },
  { img: carrosselImg5, alt: 'Slide 5', description: 'Ampliando e modernizando um lar' },
  { img: carrosselImg6, alt: 'Slide 6', description: 'Projeto de renovação e expansão residencial' },
  { img: carrosselImg7, alt: 'Slide 7', description: 'Construção de sede empresarial de última geração' },
  { img: carrosselImg8, alt: 'Slide 8', description: 'Revitalização de escritório com novos conceitos' }
];

interface ProjectCardProps {
  img: string;
  alt: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ img, alt, description }) => (
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