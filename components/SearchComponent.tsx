import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react'


const SearchComponent = () => {
  return (
    <div>
        <section className='flex items-center relative gap-1 mt-2'>
        <input type="text" placeholder='Search' name='search' className='w-44 px-2 rounded-md text-sm outline-none py-1 
        sm:w-56
        xl:w-96 xl:h-10 xl:text-lg
        ' />
        <FontAwesomeIcon icon={faSearch} className='w-4 absolute left-[9.5rem] text-gray-500
        sm:left-[12.5rem] 
        xl:left-[21.5rem] xl:w-6 xl:h-5
        '/>
        </section>
    </div>
  )
}

export default SearchComponent