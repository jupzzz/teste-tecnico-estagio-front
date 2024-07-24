import React from 'react';
import './footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AboutMe = () => {
  // Define lista de informações
  const content = [
    {
      name: 'Júlia Penz',
      description: 'Systems Analysis and Development Degree',
      github: 'https://github.com/jupzzz',
      linkedin: 'https://www.linkedin.com/in/juliapenz/'
    },
  ];

  return (
    <div className="footer">
      {/* Mapeamento do array de conteúdo para criar blocos de conteúdo */}
      {content.map((content, index) => (
        <div key={`content-${index}`} className="content-block"> {/* Propriedade que identifica cada bloco de conteúdo de forma única */}
          <h2>{content.name}</h2> {/* Exibe o nome */}
          <p>{content.description}</p> {/* Exibe a descrição */}
          <div className="icons">
            { /* Links redes sociais e ícones */}
            <a href={content.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href={content.github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutMe;