import { NavBar } from "../../components/NavBar";
import { Input } from "../../components/Input";
import { SubmitButton } from "../../components/SubmitButton";
import { List } from "../../components/List";
import { get } from "../../services/api.service";
import { useState } from "react";
import { IUser } from "../../interface/user.interface";
import { useNavigate } from "react-router-dom";
import { Componente01 } from "../../components/Componente01";
import { Componente03 } from "../../components/Componente03";
import { Loading } from "../../components/Loading";
import { useLoading } from "../../contexts/LoadingContext";
import { useGithub } from "../../contexts/GithubContext";

const Home = () => {
  const navigate = useNavigate();
  const { getUsersGithub, listUser} = useGithub();
  const [inputValue, setInputValue] = useState('');

  const handleClick = async () => {
    await getUsersGithub(inputValue)
  }

  const handleNavigateRepos = (userName: string) => {
    navigate(`/repos/${userName}`)
  }


  return(
    <div>
      <NavBar nameCompany='Fairies Wear Boots' />
      <Componente03/>
      <section className='flex'>
        <Input value={inputValue} onChange={setInputValue}/>
        <SubmitButton handleClick={handleClick}/>
      </section>
      <section>
        {listUser.map(item => (
        <List key={item.id} id={item.id} image={item.avatar_url} title={item.login} onClick={() => handleNavigateRepos(item.login)}/>
        ))}
      </section>
    </div>

  )
}

export { Home }