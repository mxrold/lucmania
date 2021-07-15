const DetailBottomButton = ({ handleChange }) => {
  return (
    <div className='flex items-center justify-center mt-8'>
      <button
        className='py-1 px-6 font-semibold bg-yellow-300 text-gray-800 bg-opacity-80 rounded-md'
        type='button'
        onClick={handleChange}
      >
        Volver atras
      </button>
    </div>
  )
}

export default DetailBottomButton
