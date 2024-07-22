import './App.css';
import menu from '../src/assets/data/menu.json'

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Menu</h1>
        <Menu items={menu} />
      </header>
    </div>
  );
}

export default App;
