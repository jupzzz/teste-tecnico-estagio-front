import React, { useState} from 'react';
import data from '../../assets/data/menu.json'
import './Menu.css'

const Menu = ({ items, activeItem, setActiveItem }) => {
    const handleClick = (item) => {
      setActiveItem(item.nome);
    };
  
    return (
      <ul className="menu">
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(item)}
            className={activeItem === item.nome ? 'active' : ''}
          >
            {item.nome}
            {item.subcategorias && item.subcategorias.length > 0 && (
              <Menu
                items={item.subcategorias}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
            )}
          </li>
        ))}
      </ul>
    );
  };
  
  const MenuContainer = () => {
    const [activeItem, setActiveItem] = useState('');
  
    return (
      <div className="menu-container">
        <Menu items={data} activeItem={activeItem} setActiveItem={setActiveItem} />
      </div>
    );
  };
  
  export default MenuContainer;