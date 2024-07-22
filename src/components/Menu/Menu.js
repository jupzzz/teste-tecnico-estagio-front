import React from 'react';
import data from '../../assets/data/menu.json'

const Menu = ({ items }) => {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.nome}
            {item.subcategorias && item.subcategorias.length > 0 && (
              <Menu items={item.subcategorias} />
            )}
          </li>
        ))}
      </ul>
    );
  };

const MenuContainer = () => {
    return <Menu items={data} />
};

export default MenuContainer;