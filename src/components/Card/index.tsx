import { useEffect, useState } from "react"

const dados = [{"nome": "Luisa"}, {"nome": "Luana"}, {"nome": "Liz"}]

interface ICard{
  nome: string;
  idade: number;
}

const Card = () => {
  const [items, setItems] = useState<ICard[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const hadleGetCards = ():Promise<ICard[]> => {
    return new Promise((resolve, reject) => {
      // resolve(5)
      // reject('Ops ocorreu um erro!');
      setTimeout(() => {
        resolve(dados)
      }, 3000);
    })
  }

  useEffect(() => {
    const onMount = async () => {
      setLoading(true);
      const result = await hadleGetCards();

      const listProduct = result.map(product => {
        return {
          ...product,
          idade: 5
        }
      })

      console.log("listProduct", listProduct);
      console.log("result", result);
      setItems(result);
      setLoading(false);

      // Usando o then
      // hadleGetCards().then(result => {
      //   console.log(result + 2)
      // }).catch(err => {
      //   console.log(err)
      // })

      // Usando o try e catch
      // try {
      //   const result = await hadleGetCards()
      //   console.log(result)

      // } catch (error){
      //   console.log(error)
      // }
    }
    onMount();
  }, []);

  return(
    <div>
      {loading ? <h1>Esta carregando</h1> : <h1>Carregou</h1>}
      {/* {loading && (<h1>Esta carregando</h1>)} */}
      {items.map((item, index) =>
      (
        // a kay eh utilizada quando algum item da lista eh removido, assim nao eh necessario recalcular tudo
        <h1 key={index}>{item.nome}</h1>
      ))}
    </div>
  )
}

export { Card }