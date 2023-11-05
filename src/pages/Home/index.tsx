import { NavBar } from "../../components/NavBar";
import { Input } from "../../components/Input";
import { SubmitButton } from "../../components/SubmitButton";
import { List } from "../../components/List";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGithub } from "../../contexts/GithubContext";
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { IProduct } from "../../interface/product.interface";

const Home = () => {
  const [items, setItems] = useState<IProduct>();
  const navigate = useNavigate();
  const { getUsersGithub, listUser} = useGithub();
  const [inputValue, setInputValue] = useState('');

  const handleClick = async () => {
    await getUsersGithub(inputValue)
  }

  const handleNavigateRepos = (userName: string) => {
    navigate(`/repos/${userName}`)
  }

  // uso o useEffect pq quero fazer essa chamada assim que a tela carregar
  useEffect(() => {

    const onMount = async () => {
      const db = getFirestore();
      const itemsRef = doc(db, "items", "K8GQQjGhvu6wKdcnUo0I");
      const resp = await getDoc(itemsRef)
      setItems(resp.data() as IProduct)
    }
    onMount();
  }, [])


  return(
    <div>
      <NavBar nameCompany='ZeroGL Bakery' />
      <section className='flex container'>
        {/* <Input value={inputValue} onChange={setInputValue}/>
        <SubmitButton handleClick={handleClick}/> */}
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