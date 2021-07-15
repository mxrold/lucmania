const DetailTopButton = ({ handleChange }) => {
  return (
    <div className='absolute md:-top-4 left-full'>
      <button
        className='fixed -ml-6 md:-ml-4 w-8 h-8 font-semibold bg-yellow-300 text-gray-800 bg-opacity-80 rounded-full'
        onClick={handleChange}
      >
        X
      </button>
    </div>
  )
}

export default DetailTopButton
