import { useState, useEffect } from 'react'

const Loader = ({ numberItems }) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    countItems()
  })

  const countItems = () => {
    const items = []
    for (let i = 0; i < numberItems; i++) {
      items.push(i)
    }

    setItems(items)
  }

  return (
    <>
      <div className={`${numberItems === 16
            ? 'grid grid-cols-2 grid-rows-2 gap-4 w-5/6 max-w-screen-2xl mx-auto sm:grid-cols-3 sm:grid-rows-3 md:grid-cols-4 md:grid-rows-4'
         : 'grid grid-cols-1 grid-rows-6 gap-4 w-full max-w-screen-2xl mx-auto sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-6 lg:grid-rows-1'}`}
      >
        {
                items.map(item => (
                  <div className='w-42 h-max border-4 bg-gray-200 shadow rounded-sm'>
                    <div className='animate-pulse'>
                      <div className={`w-full ${numberItems === 16 ? 'h-12 mb-0' : 'h-60 mb-4'}  bg-gray-300 rounded-md`} />
                      <div className={`${numberItems === 16 ? 'hidden' : ''} w-full mb-2 h-8 bg-gray-300 rounded-md`} />
                      <div className={`${numberItems === 16 ? 'hidden' : ''} w-1/3 h-4 bg-gray-300 rounded-md`} />
                    </div>
                  </div>
                ))
            }
      </div>
      <div className='animate-pulse w-5/6 max-w-screen-xl mx-auto mt-4'>
        <div className='w-full sm:w-60 md:w-80 h-10 max-content mx-auto mb-2 sm:mb-0 py-1.5 px-3 bg-gray-300 rounded-md' />
      </div>
    </>
  )
}

export default Loader
