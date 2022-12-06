import Head from 'next/head'
import Card from '../components/Card'
import SearchComponent from '../components/SearchComponent'
import Sidebar from '../components/Sidebar'
import devicedata from '../data'



export default function Home() {

  
  return (
    <div>
      <Head>
        <title>Apple Store Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='pb-auto h-screen overflow-y-scroll bg-[#EDEDED]'>
        <main className='flex gap-10
        sm:gap-20
        xl:gap-2
        '>
          <div className=''>
            <Sidebar/>
          </div>
          <div>
            <section className='flex justify-center '>
              <SearchComponent/> 
            </section>  
            <section className='flex flex-wrap mb-4 justify-center'>
            {devicedata.map((device) => (
            <div className='mt-4  '>
              <Card name={device.name} isBig={device.isBig} type={device.type} img={device.img} price={device.price}/>  
            </div>))}  
            </section>     
          </div>
          <section className='hidden xl:flex flex-col w-[45rem] min-h-screen bg-white'>
            <h1 className='text-white'>SHow</h1>
          </section>
        </main>
      </section>

      
    </div>
  )
}
