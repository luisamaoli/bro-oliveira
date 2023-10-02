const HeaderImage = () => {
  return (
    <div className='w-20 h-20'>
      <img className='h-full object-cover' src={require("../../img/header.png")} alt="" />
    </div>
  )
}

export { HeaderImage }