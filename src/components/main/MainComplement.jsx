import React from 'react'
import MainImage from './MainImage'
import MainDescriptions from './MainDescriptions'

const MainComplement = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:justify-center mb-16 px-6 py-6 sm:px-16 sm:py-9 bg-blue-300 '>
      <MainImage />
      <MainDescriptions />
    </div>
  )
}

export default MainComplement
