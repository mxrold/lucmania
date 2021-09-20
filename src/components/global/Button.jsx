import React from 'react'

const Button = ({ text, key, onClick, width }) => {
  return (
    <button
      key={key}
      onClick={onClick}
      className={`${width} max-content mb-2 sm:mb-0 py-1.5 px-3 text-base sm:text-lg font-medium tracking-wide text-center bg-gray-900  text-gray-200 rounded focus:outline-none focus:ring-4 focus:ring-yellow-300`}
    >
      {text}
    </button>
  )
}

export default Button
