import React from 'react';
import './App.css'
import MenuContainer from './components/Menu/Menu';
import Products from './components/Products/Products';
import Footer from './components/Footer/footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuContainer/>
        <div className="header-content"></div>
      </header>
      <Products />
      <Footer />
    </div>
  );
}

export default App;