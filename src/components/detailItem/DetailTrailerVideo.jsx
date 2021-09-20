import React from 'react'

const DetailTrailerVideo = ({ video }) => {
  return (
    <React.Fragment>
      {
        video === undefined || video.length === 0
          ? null
          : <div className='w-full mt-2 p-1 text-center'>
            <a
              className='text-md font-medium text-gray-400 hover:text-gray-200'
              href={`https://www.youtube.com/watch?v=${video[0].key}`}
              target='_blank'
            >
              Ver trailer en Youtube
            </a>
          </div>
      }
    </React.Fragment>
  )
}

export default DetailTrailerVideo
