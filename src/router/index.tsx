import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainer } from '../components/ItemListContainer';
import { ItemDetailContainer } from '../components/ItemDetailContainer';
import { Home } from '../pages/Home';
import { Repos } from '../pages/Repos';

const Routers = () => {
  return(
    <BrowserRouter>
      <Home/>
      <Routes>
        <Route path='/' element={<ItemListContainer name='Escolha as suas favoritas' />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/repos/:username' element={<Repos/>}/>
        <Route path ='/item/:id' element={<ItemDetailContainer />} />
        <Route path ='/cart' />
      </Routes>
    </BrowserRouter>
  )
}

export { Routers }