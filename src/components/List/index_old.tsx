import { Navigate, useNavigate } from "react-router-dom"
import { IRepo } from "../../interface/repos.interface"

interface IProps{
  listaRepo: IRepo[]
}


const List = ({ listaRepo }: IProps) => {

  const navigate = useNavigate();

  const handleClick = (userName: string) => {
    navigate(`/repos/${userName}`)
  }

//   versao utilizando o map e recebendo um array
  return(
    <div>oi
      {/* {listaRepo.map(repo =>(
        <div className="bg-white m-4 p-5 flex items-center" key={repo.id} onClick={() => handleClick(repo.login)}>
          <img className="rounded-full h-20"src={repo.avatar_url} alt="" />
          <div className="ml-6">
            <h1>{repo.login}</h1>
          </div>
        </div>
      ))} */}
    </div>
  )
}

export { List }