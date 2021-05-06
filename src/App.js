import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          Ela
        </a>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          Kutay
        </a>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          Mustafa
        </a>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          Güneş
        </a>
      </header>
    </div>
  );
}

export default App;
