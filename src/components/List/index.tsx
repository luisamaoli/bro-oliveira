import { IRepo } from "../../interface/repos.interface"

interface IProps{
  listaRepo: IRepo[]
}


const List = ({ listaRepo }: IProps) => {
  return(
    <div>
      {listaRepo.map(repo =>(
        <div className="bg-white m-4 p-5 flex items-center" key={repo.id}>
          <img className="rounded-full h-20"src={repo.owner.avatar_url} alt="" />
          <div className="ml-6">
            <h1>{repo.full_name}</h1>
            <h1>{repo.owner.avatar_url}</h1>
          </div>
        </div>
      ))}
    </div>
  )
}

export { List }