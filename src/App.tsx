import { Hero } from './components/Hero';
import { ItemListContainer } from './components/ItemListContainer';
import './App.css';

import { Card } from './components/Card';

function App() {
  return (
    <div className="App">
      <Card />
      <ItemListContainer name='Escolha as suas favoritas' />
      <Hero />
    </div>
  );
}

export default App;
