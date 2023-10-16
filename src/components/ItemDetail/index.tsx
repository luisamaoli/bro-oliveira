import { ItemDetailContainer } from "../ItemDetailContainer";

const item = [
  {
    "id": 1,
    "title": "bordada",
    "price": 534.00,
    "pictureUrl": "../../img/bordada.png"
  }
];

const ItemDetail = () => {
  return(
    <ItemDetailContainer item={item} />
  )
}

export { ItemDetail }