import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faShop, faBagShopping, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'



const Sidebar = () => {
    const [tab,setTab] = useState<number>(1)
    const toggleTab = (tabNumber:number) =>{   
        setTab(tabNumber);
    }
  return (
    <div>
        
        <main className='w-10 flex flex-col  py-2 fixed top-0 bottom-0  items-center gap-6  min-h-screen bg-white
        sm:w-16 
        '>
            <div className={`text-black w-8 h-8 flex justify-center rounded-xl ease-in-out duration-500 cursor-pointer hover:text-white hover:bg-[#1A1F16] ${tab == 1 ? 'ease-in-out duration-500 text-white bg-[#1A1F16]' : ''}
            sm:w-12 sm:h-12
            `}
            onClick={() => toggleTab(1)}
            >
                <FontAwesomeIcon icon={faApple} className='w-4 sm:w-6 ' />
            </div>
            <div className={`text-black w-8 h-8 flex justify-center rounded-xl ease-in-out duration-500 cursor-pointer hover:text-white hover:bg-[#1A1F16] ${tab == 2 ? 'ease-in-out duration-500 text-white bg-[#1A1F16]' : ''}
            sm:w-12 sm:h-12
            `}
            onClick={() => toggleTab(2)}
            >
                <FontAwesomeIcon icon={faShop} className='w-4 sm:w-6 ' />
            </div>
            <div className={`text-black w-8 h-8 flex justify-center rounded-xl ease-in-out duration-500 cursor-pointer hover:text-white hover:bg-[#1A1F16] ${tab == 3 ? 'ease-in-out duration-500 text-white bg-[#1A1F16]' : ''}
            sm:w-12 sm:h-12
            `}
            onClick={() => toggleTab(3)}
            >
                <FontAwesomeIcon icon={faBagShopping} className='w-4 sm:w-6 ' />
            </div>
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