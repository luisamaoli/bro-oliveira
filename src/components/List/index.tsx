interface IProps{
  id: number;
  image: string;
  title: string;
  // onClick eh um callback eu to avisando pro componente pai alguma coisa, opcional coloca ?
  onClick?: () => void;
}


const List = ({ id, image, title, onClick }: IProps) => {
  return(
    // esse && no onclick eh um if, se existir o onclick pega ele
    <div className="bg-white m-4 p-5 flex items-center" key={id} onClick={onClick && onClick}>
      <img className="rounded-full h-20"src={image} alt="" />
      <div className="ml-6">
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export { List }