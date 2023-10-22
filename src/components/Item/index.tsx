import { ItemList } from "../ItemList";

const items = [
  {
    "id": 1,
    "title": "bordada",
    "price": 534.00,
    "pictureUrl": "../../img/bordada.png"
  }
  ,
  {
    "id": 2,
    "title": "snakeboots",
    "price": 554.00,
    "pictureUrl": "../../img/snakeboots.png"
  },
  {
    "id": 3,
    "title": "croco",
    "price": 564.00,
    "pictureUrl": "../../img/croco.png"
  }
];

const Item = () => {
  return(
    <ItemList items={items} />
  )
}

export { Item }
