import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faShop, faBagShopping, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAppSelector } from '../redux/hooks/hooks'



const Sidebar = () => {
    const router = useRouter()
    const cartQuantity = useAppSelector((state) => state.cart.cartQuantity)

  return (
    <div>
        
        <main className='w-10 flex flex-col  py-2 fixed top-0 bottom-0  items-center gap-6  min-h-screen bg-white
        sm:w-16 
        '>
            <div className={`text-black w-8 h-8 flex justify-center rounded-xl ease-in-out duration-500 cursor-pointer 
            sm:w-12 sm:h-12
            `}
            >
                <FontAwesomeIcon icon={faApple} className='w-4 sm:w-6 ' />
            </div>
            <Link href='/' className={`${router.pathname == '/' ? 'text-white' : 'text-black'} w-8 h-8 flex justify-center rounded-xl ease-in-out duration-500 cursor-pointer hover:text-white hover:bg-[#1A1F16] ${router.pathname == '/' ? 'ease-in-out duration-500 text-white bg-[#1A1F16]' : ''}
            sm:w-12 sm:h-12
            `}
            >
                <FontAwesomeIcon icon={faShop} className='w-4 sm:w-6 ' />
            </Link>
            <Link href='/Cart' className={`${router.pathname == '/Cart' ? 'text-white' : 'text-black'} w-8 h-8 flex justify-center rounded-xl ease-in-out duration-500 cursor-pointer hover:text-white hover:bg-[#1A1F16] ${router.pathname == '/Cart' ? 'ease-in-out duration-500 text-white bg-[#1A1F16]' : ''}
            sm:w-12 sm:h-12 relative
            `}
            >
                <FontAwesomeIcon icon={faBagShopping} className='w-4 sm:w-6 ' />
                <div className='w-4 h-4 text-xs rounded-full bg-[#E5252C] md:w-7 md:h-7 absolute text-white flex justify-center items-center 
                left-5 bottom-5
                md:left-7 md:bottom-8 md:text-base
                xl:left-7 xl:bottom-8'>{cartQuantity}</div>
            </Link>
            <div className='mt-auto  w-8 h-8 flex justify-center rounded-xl ease-in-out duration-500 cursor-pointer text-white bg-[#E5252C]
            sm:w-12 sm:h-12
            '>
                <FontAwesomeIcon icon={faArrowRightFromBracket} className='w-4 sm:w-6 ' />
            </div>


        </main>
    </div>
  )
}

export default Sidebar