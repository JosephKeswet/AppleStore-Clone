import Head from 'next/head'
import Card from '../components/Card'
import SearchComponent from '../components/SearchComponent'
import Sidebar from '../components/Sidebar'
import SmallCard from '../components/SmallCard'
import Devicedata from '../Data/Data'



export default function Home() {

  
  return (
    <div>
      <Head>
        <title>Apple Store Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='h-auto md:min-h-screen  bg-[#EDEDED]'>
        <main className='flex gap-10  xl:divide-x-4 divide-gray-500
        sm:gap-20 xl:h-screen xl:overflow-y-scroll
        xl:gap-2 
        '>
          <div className=''>
            <Sidebar/>
          </div>
          <div>
            <section className='flex justify-center mt-4 '>
              <SearchComponent/> 
            </section>  
            <section className='flex flex-wrap mb-4 justify-center'>
            {Devicedata?.map((device,index:number) => (
            <div className='mt-4 ' key={index}>
              <Card name={device.name} isBig={device.isBig} type={device.type} img={device.img} price={device.price}/>  
            </div>))}  
            </section>     
          </div>
          <section className='hidden xl:flex flex-col pt-16 items-center w-[40rem] min-h-screen'>
            <h1 className='text-[#1A1F16] text-4xl leading-10 font-medium text-center'>Bag</h1>
            <main className='w-[25rem] mt-6 flex flex-wrap gap-5 justify-center items-center h-auto '>
                {Devicedata?.map((device) => (
                <div className='mt-4' key={device.type}>
                  <SmallCard/>
                </div>))}
            </main>
          </section>
        </main>
      </section>

      
    </div>
  )
}
