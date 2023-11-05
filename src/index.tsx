import ReactDOM from 'react-dom/client';
import './index.css';
import { Routers } from './router/index'
import { CartProvider } from './contexts/CartContext';
import { LoadingProvider } from './contexts/LoadingContext';
import { Loading } from './components/Loading';
import { GithubProvider } from './contexts/GithubContext';
import { initializeApp } from "firebase/app";
import { CountProvider } from './contexts/CountContext';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: "bro-oliveira",
  storageBucket: "bro-oliveira.appspot.com",
  messagingSenderId: "1056364379368",
  appId: "1:1056364379368:web:b76751d38fcded42c81d5d"
};

let firebase_app = initializeApp(firebaseConfig);

export {firebase_app}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <LoadingProvider>
    <GithubProvider>
      <CountProvider>
        <CartProvider>
          <Loading/>
          <Routers />
        </CartProvider>
      </CountProvider>
    </GithubProvider>
  </LoadingProvider>
);
