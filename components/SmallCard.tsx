import Image from 'next/image'
import React from 'react'
import IPhone11 from '../Assets/img/IPhone11_Black.png'


const SmallCard = () => {
  return (
    <div>
        <main className='w-28 h-24 rounded-xl cursor-pointer bg-white flex justify-center items-center'>
            <Image src={IPhone11} alt='' className='w-[4.5rem] h-20'/>
        </main>
    </div>
  )
}

export default SmallCard