import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { get } from "../../services/api.service";
import { List } from "../../components/List";
import { IRepo } from "../../interface/repos.interface";

const Repos = () => {
  const [listRepo, setListRepo] = useState<IRepo[]>();
  const { username } = useParams();

  // vou usar useEffect pq quando minha pagina estiver carregando eu quero chamar meu endpoint
  useEffect(() => {
    const onMount = async () => {
      const result = await get(`users/${username}/repos`);
      setListRepo(result.data)
    }
    onMount();
  }, [])

  return(
    <div className="App container pt-16">
      <h1 className="text-6xl font-bold md:w-1/2">Explore os repositorios do Github</h1>
      <section>
      {listRepo?.map(item =>(
        <List key={item.id} id={item.id} image={item.owner.avatar_url} title={item.full_name}/>
      ))}
      </section>
    </div>
  )
}

export { Repos }