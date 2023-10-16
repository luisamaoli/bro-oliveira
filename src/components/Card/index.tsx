import { useEffect, useState } from "react"
import { get } from "../../services/api.service";
import { Loading } from "../Loading";

const Card = () => {
  // criou-se a funcao dentro para que possa deixar assincrono
  useEffect(() => {
    const onMount = async () => {
        const result = await get("/character/?page=2")
        console.log(result);
    }
    onMount();
  }, []);

  return(
    <div>
      <Loading />
    </div>
  )
}

export { Card }