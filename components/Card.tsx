import Image, { StaticImageData } from 'next/image'
import React from 'react'
import AddToCart from '../Assets/icons/AddToCart.png'

interface IProps {
  name:string,
  type:string,
  img:string | StaticImageData
  price:number,
  isBig?:boolean
}

const Card = ({name,price,img,type,isBig}:IProps) => {
  return (
    <div>
        <section>
        
            <main className={`${isBig ? 'w-72 sm:w-80': 'w-36 sm:w-44'} flex flex-col text-black py-2 rounded-lg hover:text-white items-center  hover:bg-gray-500`}>
                <div className={`bg-white ${isBig ? 'w-64 h-36 sm:w-72 sm:h-40' : 'w-28 h-24 sm:w-40 sm:h-32'}  mb-2 flex items-center justify-center rounded-lg`}>
                  <Image src={img} className={`${isBig ? 'w-64 h-36 pb-4 sm:w-72 sm:h-40' : 'w-20 h-24 sm:w-28 sm:h-28'}`} alt='Apple Watch'/>
                </div>
                <div className={`flex flex-col gap-1
                ${isBig ? 'w-64 sm:w-72' : 'w-28 sm:w-40'}`}>
                  <h1 className='w-28 text-sm font-normal'>{name}</h1>
                  <h1 className='w-28 text-xs font-light'>{type}</h1>
                  <div className='flex items-center justify-between'>
                    <h1 className='text-base font-normal'>$ {price}</h1>
                    <div className='w-6 h-6 flex items-center justify-center rounded-lg bg-black '>
                      <Image src={AddToCart} alt='' className='w-4'/>
                    </div>
                  </div>
                </div>
            </main>
        </section>
    </div>
  )
}

export default Card