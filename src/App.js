import React from 'react';
import './App.css'
import MenuContainer from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuContainer/>
        <div className="header-content"></div>
      </header>
    </div>
  );
}

export default App;