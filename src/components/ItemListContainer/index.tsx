import { BuyerButton } from "../BuyerButton";
import { Card } from "../Card";
import { Counter } from "../Counter";

// interface funciona como um contracts
interface IProps {
  name: string;
  }

const ItemListContainer = ({ name }: IProps) => {
  return(
    <div className="container mx-auto py-10 text-6xl">
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      <div className="flex items-center space-x-4">
        <div className="flex flex-col items-center">
          <Card name= {require("../../img/bordada.png")}/>
          <Counter />
        </div>

        <div className="flex flex-col items-center">
          <Card name= {require("../../img/snakeboots.png")}/>
          <Counter />
        </div>

        <div className="flex flex-col items-center">
          <Card name= {require("../../img/croco.png")}/>
          <Counter />
        </div>
      </div>
    </div>
    )
  }


export { ItemListContainer }