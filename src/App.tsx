import React from 'react';
import { Hero } from './components/Hero';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import './App.css';
import { Card } from './components/Card';
import { Item } from './components/Item';

function App() {
  return (
    <div className="App">
      <NavBar nameCompany='Fairies Wear Boots' />
      <Card />
      <ItemListContainer name='Escolha as suas favoritas' />
      <Hero />
    </div>
  );
}

export default App;
