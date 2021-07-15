import FilteredItem from './FilteredItem'

const FilteredList = ({ dataRandom, path, showModal, setShowModal }) => {
  return (
    <div className='grid grid-cols-1 grid-rows-6 gap-4 w-full mx-auto sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-6 lg:grid-rows-1 mt-4'>
      {
                dataRandom.map(item =>
                  <FilteredItem
                    item={item}
                    path={path}
                    showModal={showModal}
                    setShowModal={setShowModal}
                  />
                )
            }
    </div>
  )
}

export default FilteredList
