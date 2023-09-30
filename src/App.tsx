import React from 'react';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { Card } from './components/Card';
import { ItemListContainer } from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar name='Bright Routes Organizer'/>
      <ItemListContainer name='ItemListContainer'/>
      <Hero />
      <Card />
    </div>
  );
}

export default App;
