import { ChangeEvent, useState } from "react"
import { text } from "stream/consumers";

interface IProps{
  value: string;
  onChange:(value: string) => void;
}

const Input = ({value, onChange}: IProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  // handleMask eh uma mascara para nao aceitar numeros no campo de pesquisa
  const handleMask = (event: any) => {
    // event.key pega caracter por caracter da digitacao
    const texto = event.key;
    // event.preventDefault() faz com que nao insira esse caracter
    if('0123456789'.includes(texto)){
      event.preventDefault();
    }
  }

  return(
    // onKeyDown eh quando voce tira o dedo da tecla
    <input className="w-full mt-10 p-6" type="text" value={value} onChange={handleInputChange} onKeyDown={handleMask}/>
  )
}

export { Input }