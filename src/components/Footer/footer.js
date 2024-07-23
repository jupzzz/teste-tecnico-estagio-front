import React from 'react';
import './footer.css';

const AboutMe = () => {
  const content = [
    { name: 'Julia Penz', description: 'O Meizu 18 Pro é, sem dúvida, um dos smartphones Android mais avançados e abrangentes disponíveis no mercado, graças ao seu rico equipamento e recursos multimídia avançados. ', image: 'celular.png' },
  ];

  return (
    <div className="footer">
      {content.map((content, index) => (
        <>
          <h2 key={`name-${index}`}>{content.name}</h2>
          <p key={`description-${index}`}>{content.description}</p>
        </>
      ))}
    </div>
  );
};

export default AboutMe;