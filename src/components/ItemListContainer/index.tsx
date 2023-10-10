import { BuyerButton } from "../BuyerButton";
import { Counter } from "../Counter";
import { Item } from "../Item";
import { ItemList } from "../ItemList";
import React, { useState } from 'react';

// interface funciona como um contracts
interface IProps {
  name: string;
  }


const ItemListContainer = ({ name }: IProps) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  return(
    <div className="container mx-auto py-10 text-6xl">
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      <div className="flex items-center space-x-4">
        <div className="flex flex-col items-center">
          <img className='w-1/2 h-auto max-w-full' src={require("../../img/bordada.png")} alt="" />
          <button className="mt-2 py-0.5 px-0.5 rounded hover:bg-pink-600 text-xs" onClick={() => setButtonClicked(true)}>Show Items</button>
          {buttonClicked && <Item />}
          <Counter stock={10} initial={1}/>
        </div>

        <div className="flex flex-col items-center">
          <img className='w-1/2 h-auto max-w-full' src={require("../../img/snakeboots.png")} alt="" />
          <Counter stock={5} initial={0}/>
        </div>

        <div className="flex flex-col items-center">
          <img className='w-1/2 h-auto max-w-full' src={require("../../img/croco.png")} alt="" />
          <Counter stock={12} initial={2}/>
        </div>
      </div>
    </div>
    )
  }


export { ItemListContainer }