import React, { useState } from 'react';
import data from '../../assets/data/menu.json'
import './Menu.css'

// Componente que exibe uma lista de itens
const Menu = ({ items, activeItem, setActiveItem }) => {
  // Função de clique em item 
  const handleClick = (item) => {
    setActiveItem(item.nome); // Atualiza o item com o nome do item clicado
  };

  return (
    <ul className="menu"> {/* Lista nao ordenada para exibir os itens */}
    {/* Mapeamento do array para criar a lista de itens */}
      {items.map((item, index) => (
        <li
          key={index} // Propriedade que identifica cada item de forma unica
          onClick={() => handleClick(item)} // Açao do clique no item
          className={activeItem === item.nome ? 'active' : ''}
        >
          {item.nome} {/* Exibe o nome do item */}
          {/* verifica se o item tem subcategoria e se tem tamanho maior que 0 */}
          {item.subcategorias && item.subcategorias.length > 0 && (
            <Menu 
              items={item.subcategorias} // Passa a subcategoria para o nivel seguinte do menu
              activeItem={activeItem} // Passa o item pra controle
              setActiveItem={setActiveItem} // Atualiza o item
            />
          )}
        </li>
      ))}
    </ul>
  );
};

// Componente que serve para gerenciar o item e renderizar o menu
const MenuContainer = () => {
  const [activeItem, setActiveItem] = useState(''); // Armazena o item
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    
    <div className="menu-container">
      <div className="logo" />
      <div className="topnav">
        <a href="javascript:void(0);" className="icon" onClick={toggleMobileMenu}>
          <i className="fa fa-bars"></i>
        </a>
        <div id="myLinks" className={`menu-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
          <Menu items={data} activeItem={activeItem} setActiveItem={setActiveItem} />
        </div>
      </div>
      </div>
  );
};

export default MenuContainer;