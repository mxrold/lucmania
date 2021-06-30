import DefaultImage from '../assets/static/default-poster-image.jpg'

const FilteredItem = ({ item, path, showModal, setShowModal }) => {

    const handleDetailItem = () => {
        sessionStorage.setItem('IdItem', item.id)
        setShowModal(!showModal)
    } 

    const formatWords = (value, leng) => {
        if(value === undefined) {
            return 'Sin título'
        } else {
            return value.length > leng ? value.slice(0, leng) + '...' : value
        }
    } 
console.log('desde item', item)
    return (
        <button key={item.id} onClick={handleDetailItem} className="flex flex-row sm:flex-col bg-gray-200 shadow-md border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-gray-600">  
            <img className="w-32 h-48 sm:w-full sm:h-72 md:w-48 md:h-auto md:max-h-48 2xl:max-h-72 object-fill bg-cover rounded-tl-md rounded-bl-md sm:rounded-t sm:rounded-bl-none" src=
                {item.poster_path === null || item.poster_path === undefined
                    ? DefaultImage  
                    : `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`}
                alt={`Imagen de portada de ${path === '/tv' ? item.name : item.title}`}
            />  
            <div className="flex flex-col justify-between  w-full h-full px-3 py-2 text-left">
                <div>
                <span className="block text-xl font-semibold text-gray-800">
                    {path === '/tv' ? formatWords(item.name, 30) : formatWords(item.title, 30)}
                </span>
                {
                    item === undefined && item.first_air_date === null || item.release_date === null
                    ? null 
                    : <span className="block mt-2 text-sm font-medium text-gray-700">
                       {path === '/tv' ? item.first_air_date : item.release_date}
                     </span>
                }
                </div>
                {
                item.vote_average * 10 > 75
                ? <span className="block self-end top-full w-max my-2 px-2 py-0.5 text-xs font-medium bg-green-300 text-green-900 bg-opacity-80  border-2 border-green-400 rounded-full">
                    Más populares
                  </span>
                : null
            }
            </div>
            
        </button>
    )
}

export default FilteredItem