import ReactDOM from 'react-dom/client';
import './index.css';
import { Routers } from './router/index'
import { CartProvider } from './contexts/CartContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <CartProvider>
    <Routers />
  </CartProvider>
);
