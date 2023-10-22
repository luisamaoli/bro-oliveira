import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { ItemListContainer } from '../components/ItemListContainer';
import { ItemDetailContainer } from '../components/ItemDetailContainer';

const Routers = () => {
  return(
    <BrowserRouter>
    <NavBar nameCompany='Fairies Wear Boots' />
      <Routes>
        <Route path='/' element={<ItemListContainer name='Escolha as suas favoritas' />} />
        <Route path ='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export { Routers }