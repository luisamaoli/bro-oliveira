import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { ItemListContainer } from '../components/ItemListContainer';
import { ItemDetailContainer } from '../components/ItemDetailContainer';
import { Input } from '../components/Input';
import { SubmitButton } from '../components/SubmitButton';
import { useState } from 'react';
import { get } from '../services/api.service';
import { List } from '../components/List';
import { IRepo } from '../interface/repos.interface';
import { BuyerButton } from '../components/BuyerButton';

const Routers = () => {
  const [listaRepo, setlistaRepo] = useState<IRepo[]>([])
  const [inputValue, setInputValue] = useState('');
  const handleClick = async () => {
    const lista = await get(`users/${inputValue}/repos`)
    setlistaRepo(lista.data)
  }
  return(
    <BrowserRouter>
    <NavBar nameCompany='Fairies Wear Boots' />
    <section className='flex'>
      <Input value={inputValue} onChange={setInputValue}/>
      <SubmitButton handleClick={handleClick}/>
    </section>
    <section>
      <List listaRepo={listaRepo}/>
    </section>
      <Routes>
        <Route path='/' element={<ItemListContainer name='Escolha as suas favoritas' />} />
        <Route path ='/item/:id' element={<ItemDetailContainer />} />
        <Route path ='/cart' />
      </Routes>
    </BrowserRouter>
  )
}

export { Routers }