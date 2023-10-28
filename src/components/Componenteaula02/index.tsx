import { Componenteaula03 } from "../Componenteaula03"

const Componenteaula02 = () => {
  return(
    <>
      <h1>Componente02</h1>
      <Componenteaula03></Componenteaula03>
    </>
  )
}

export { Componenteaula02 }


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