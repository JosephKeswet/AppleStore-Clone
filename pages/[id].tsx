import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import DevicesData from '../Data/Data'

const IndividualPage = () => {
    const router = useRouter()
    const query  = router.query
    const [device,setDevice] = useState<{name:string,type:string,price:number,img:StaticImageData}[] | any>()
    const newIndex:number = Number(query.id)
    console.log(query.id);
    useEffect(()=>{
        const deviceArray:any = []
        DevicesData.map((device:any) =>{
         deviceArray.push(device);
        })
        setDevice(deviceArray[newIndex])
        console.log(device)
        
    },[newIndex])
  return (
    <div>
        <section className='flex gap-20  min-h-screen  bg-[#EDEDED]'>
            <div>
                <Sidebar/>
            </div>
            <main>
                <h1>{device?.name}</h1>
                <Image src={device?.img} alt='' />
            </main>
        </section>

    </div>
  )
}

export default IndividualPage