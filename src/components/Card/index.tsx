interface IProps {
  name: string;
}

const Card = ({ name }: IProps) => {
  return(
    <img className='w-1/2 h-auto max-w-full' src={name} alt="" />
  )
}

export { Card }