interface IProps{
  handleClick: () => void;
}


const SubmitButton = ({handleClick}: IProps) => {

  return (
    <button className="p-4 mt-10 rounded hover:bg-pink-600" onClick={handleClick}>Pesquisar</button>
  )
}

export { SubmitButton }