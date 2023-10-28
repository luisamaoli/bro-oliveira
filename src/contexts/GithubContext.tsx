import { createContext, useContext, useState } from "react";
import { get } from "../services/api.service";
import { IUser } from "../interface/user.interface";
import { useLoading } from "./LoadingContext";
import { IRepo } from "../interface/repos.interface";

//  interface eh pra tipar os metodos que o contexto ira usar (todos os metodos que eu queria criar algo global) exportar
interface IGithub {
  getUsersGithub: (userName: string) => void;
  listUser: IUser[];
  getReposGithub: (userName: string) => void;
  listRepos: IRepo[];
}

// valores default para comecar a as variaveis/funcoes
const GithubContext = createContext<IGithub>({
  getUsersGithub: () => null,
  listUser: [],
  getReposGithub: () => null,
  listRepos: [],
})

// aqui a gente tipa o children, que eh quem ta em volta da minha funcao la na definicao global
interface IGithubProviderProps {
  children: React.ReactNode
}

//  aqui retorna o que o contexto vai prover pra aplicação
const GithubProvider = ({ children }: IGithubProviderProps) => {
  const { setIsVisible } = useLoading();
  const [listUser, setListUser] = useState<IUser[]>([])
  const [listRepos, setListRepos] = useState<IRepo[]>([])

  const getUsersGithub = async (userName: string) => {
    setIsVisible(true)
    const resp = await get(`users/${userName}`);
    setListUser(previous => [...previous, resp.data]);
    setIsVisible(false)
  }

  const getReposGithub = async (userName: string) => {
    setIsVisible(true)
    const resp = await get(`users/${userName}/repos`);
    setListRepos(resp.data)
    setIsVisible(false)
  }
  return(
    <GithubContext.Provider
      value={{
        getUsersGithub,
        listUser,
        getReposGithub,
        listRepos
      }}
    >
      { children }
    </GithubContext.Provider>
  )
}

const useGithub = () => useContext(GithubContext);

export { GithubProvider, useGithub}