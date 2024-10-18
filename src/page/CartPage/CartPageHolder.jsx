import Cart from './Cart'
import { Routes, Route } from 'react-router-dom'

const CartPageHolder = () => {
  return (
    <div className='w-full flex items-center justify-center flex-col'>
       <Routes>
        <Route path='*' element={ <Cart  />}/>
       </Routes>
    </div>
  )
}

export default CartPageHolder