import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CardWidget = () => {
  return (
    <div className='text-2xl pl-1.5'>
      <FontAwesomeIcon icon={faCartShopping} />
    </div>
  )
}

export { CardWidget }