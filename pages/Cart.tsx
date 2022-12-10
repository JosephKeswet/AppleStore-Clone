import React from 'react'
import Sidebar from '../components/Sidebar'
import { useAppSelector } from '../redux/hooks/hooks'


const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems)
  return (
    <div>
        <section className='flex gap-20  min-h-screen  bg-[#EDEDED]'>
            <div>
                <Sidebar/>
            </div>
            <main>
              {cartItems.map((item:any) =>(
                <ul key={item.id}>
                  <li>{item.name}</li>
                </ul>
              ))}
            </main>
        </section>
        
    </div>
  )
}

export default Cart