import React from 'react'
import Button from '../global/Button'

const FilteredButton = ({ handleNewResults, genre }) => {
  return (
    <div className='flex flex-col justify-center items-center w-full mt-4'>
      <Button
        text={`Volver a buscar sobre ${genre[1]}`}
        onClick={() => handleNewResults()}
        width='w-full sm:w-60 md:w-80 md:min-w-max'
      />
    </div>
  )
}

export default FilteredButton
