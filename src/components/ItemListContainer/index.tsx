import { ItemsList } from "../ItemsList";

// interface funciona como um contracts
interface IProps {
  name: string;
  }


const ItemListContainer = ({ name }: IProps) => {
  return(
    <div className="container mx-auto py-10 text-6xl">
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      <div><ItemsList /></div>
    </div>
    )
  }


export { ItemListContainer }