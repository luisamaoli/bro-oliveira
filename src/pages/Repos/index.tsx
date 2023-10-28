import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { List } from "../../components/List";
import { useGithub } from "../../contexts/GithubContext";

const Repos = () => {
  const { username } = useParams();
  const { getReposGithub, listRepos} = useGithub();

  // vou usar useEffect pq quando minha pagina estiver carregando eu quero chamar meu endpoint
  useEffect(() => {
    const onMount = async () => {
      if (username) {
        getReposGithub(username);
      }
    }
    onMount();
  }, [])

  return(
    <div className="App container pt-16">
      <h1 className="text-6xl font-bold md:w-1/2">Explore os repositorios do Github</h1>
      <section>
      {listRepos?.map(item =>(
        <List key={item.id} id={item.id} image={item.owner.avatar_url} title={item.full_name}/>
      ))}
      </section>
    </div>
  )
}

export { Repos }