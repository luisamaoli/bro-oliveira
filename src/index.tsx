import ReactDOM from 'react-dom/client';
import './index.css';
import { Routers } from './router/index'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Routers />
);
