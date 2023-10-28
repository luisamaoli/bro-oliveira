import ReactDOM from 'react-dom/client';
import './index.css';
import { Routers } from './router/index'
import { CartProvider } from './contexts/CartContext';
import { LoadingProvider } from './contexts/LoadingContext';
import { Loading } from './components/Loading';
import { GithubProvider } from './contexts/GithubContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <LoadingProvider>
    <GithubProvider>
      <CartProvider>
        <Loading/>
        <Routers />
      </CartProvider>
    </GithubProvider>
  </LoadingProvider>
);
