import React from 'react';
import './App.css';
import Shop from './Components/Shop/Shop';
import logo from './images/logo.png'

function App() {
  return (
    <div>
      <header className='text-center'>
        <img src={logo} alt="" />
      </header>
      <Shop></Shop>
    </div>
  );
};

export default App;
