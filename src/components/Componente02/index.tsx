import { Componente03 } from "../Componente03"

const Componente02 = () => {
  return(
    <>
      <h1>Componente02</h1>
      <Componente03></Componente03>
    </>
  )
}

export { Componente02 }


// antes de implementar context
// import { Componente03 } from "../Componente03"

// interface IProps{
//   title: string;
// }


// const Componente02 = ({title}: IProps) => {
//   return(
//     <>
//       <h1>Componente02</h1>
//       <Componente03 title={'oi'}></Componente03>
//     </>
//   )
// }

// export { Componente02 }