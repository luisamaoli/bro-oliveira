// interface funciona como um contracts
interface IProps {
  name: string;
  }

const ItemListContainer = ({ name }: IProps) => {
  return(
    <div className="container mx-auto py-10 text-6xl">
      <span className="py-16">{name}</span>
    </div>
    )
  }


export { ItemListContainer }