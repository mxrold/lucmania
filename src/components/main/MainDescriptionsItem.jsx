import React from 'react'
import Titleh3 from '../global/Titleh3'
import TextParagraph from '../global/TextParagraph'

const MainDescriptionsItem = ({ title, data }) => {
  return (
    <div className='relative top-2 right-2 max-w-xs mx-auto h-max mt-12 lg:my-4 bg-gray-700 rounded'>
      <div className='relative bottom-2 left-2 p-3 sm:p-4 md:w-full md:text-left bg-gray-300 border-2 border-gray-700 rounded'>
        <Titleh3 title={title} />
        <TextParagraph text={data} />
      </div>
    </div>
  )
}

export default MainDescriptionsItem
