import React from 'react'

const DetailOverview = ({ overview }) => {
  return (
    <React.Fragment>
      {
        overview === ''
          ? null
          : <div className='mt-5'>
            <h3 className='text-xl font-semibold text-gray-200'>Resumen</h3>
            <p className='mt-1 text-md text-gray-300 '>
              {overview}
            </p>
          </div>
      }
    </React.Fragment>
  )
}

export default DetailOverview
