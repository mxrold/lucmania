import React from 'react'

const ButtonSecondary = ({ text, handleChange, margin = 'ml=0' , background, textColor, bgHover }) => {
    return (
      <button
        className={`${margin} py-2 px-6 text-md font-medium tracking-wide ${background} ${textColor} rounded-md ${bgHover}`}
        type='button'
        onClick={handleChange}
      >
        {text}
      </button>
    )
}

export default ButtonSecondary
