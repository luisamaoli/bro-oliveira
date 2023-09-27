import React from 'react';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar name='Bright Routes Organizer'/>
      <Hero name='Luisa Mafra' />
    </div>
  );
}

export default App;
