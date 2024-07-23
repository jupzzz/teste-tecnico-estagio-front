import React from 'react';
import './footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AboutMe = () => {
  const content = [
    {
      name: 'Júlia Penz',
      description: 'Im currently studying Systems Analysis and Development in my last semester at university, graduation in June.',
      github: 'https://github.com/jupzzz',
      linkedin: 'https://www.linkedin.com/in/juliapenz/'
    },
  ];

  return (
    <div className="footer">
      {content.map((content, index) => (
        <div key={`content-${index}`} className="content-block">
          <h2>{content.name}</h2>
          <p>{content.description}</p>
          <div className="icons">
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