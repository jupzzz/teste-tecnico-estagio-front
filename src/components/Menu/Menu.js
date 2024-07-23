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

  return (
    <div className="menu-container"> {/* Conteiner para todo o menu e o logo */}
      <div className="logo" /> 
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
      <Menu items={data} activeItem={activeItem} setActiveItem={setActiveItem} /> { /* Renderiza o componente com o JSON */}
    </div>
  );
};

export default MenuContainer;