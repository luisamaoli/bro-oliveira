import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainer } from '../components/ItemListContainer';
import { ItemDetailContainer } from '../components/ItemDetailContainer';
import { Home } from '../pages/Home';
import { Cart } from '../components/Cart';
import { CheckOut } from '../components/CheckOut';
import { SubmitOrder } from '../components/SubmitOrder';
import { Historia } from '../components/Historia';
import { CompraComSucesso } from '../components/CompraComSucesso';

const Routers = () => {
  return(
    <BrowserRouter>
      <Home/>
      <Routes>
        <Route path='/' element={<ItemListContainer name='Escolha as suas favoritas' />} />
        <Route path='/home' element={<Home/>}/>
        <Route path ='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='/historia' element={<Historia/>} />
        <Route path ='/cart' element={<Cart/>} />
        <Route path='/catalogo' element={<ItemListContainer name='Escolha as suas favoritas' />} />
        <Route path ='/checkout' element={<CheckOut/>} />
        <Route path ='/submit_order' element={<SubmitOrder/>} />
        <Route path='/sucesso_compra' element={<CompraComSucesso/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export { Routers }