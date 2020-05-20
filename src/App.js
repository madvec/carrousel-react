import React from 'react';
import UtilCarrousel from './container/UtilCarrousel'
import ImagesList from './container/ImagesList'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>This is a react App Carrousel</p>
        <div className="Content">
          <UtilCarrousel />          
        </div>
        <div className="Content">
          <ImagesList />
        </div>
      </header>
    </div>
  );
}

export default App;
