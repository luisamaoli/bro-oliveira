import { Link } from "react-router-dom"

const BuyerButton = () => {
  return(
    <div>
      <Link to={`/cart`}><button className="mt-2 center rounded hover:bg-violet-600 text-base justify-center">Comprar</button></Link>
    </div>
  )
}

export { BuyerButton }