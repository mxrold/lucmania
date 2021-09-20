import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({ pathText }) => {
  return (
    <div className='mt-6'>
      <Link
        className='my-4 text-lg font-medium text-gray-700 border-t-2 border-blue-400 hover:text-blue-700'
        to='/'
      >
        {pathText}
      </Link>
    </div>
  )
}

export default LinkButton
