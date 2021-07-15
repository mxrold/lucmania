const DetailVotes = ({ votes }) => {
  const formatVoteAverage = (votes) => {
    if (votes < 50) {
      return 'bg-red-400'
    } else if (votes > 50 && votes < 75) {
      return 'bg-yellow-400'
    } else {
      return 'bg-green-400'
    }
  }

  return (
    <div className='flex w-2/4 md:w-auto items-center justify-center'>
      <div className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 mr-2 font-semibold ${formatVoteAverage(votes)} text-gray-900 bg-opacity-90 rounded-full`}>
        <span className='text-md'>{votes}</span>
        <span className='text-xs'>%</span>
      </div>
      <div>
        <p className='text-sm text-gray-400'>Puntuaciones</p>
        <p className='text-sm text-gray-400'> de usuarios</p>
      </div>
    </div>
  )
}

export default DetailVotes
