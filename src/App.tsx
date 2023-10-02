import React from 'react';
import { Hero } from './components/Hero';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar nameCompany='Fairies Wear Boots' />
      <ItemListContainer name='Escolha as suas favoritas'/>
      <Hero />
    </div>
  );
}

export default App;
