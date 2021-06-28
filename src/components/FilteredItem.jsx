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

    return (
        <button key={item.id} onClick={handleDetailItem} className="flex sm:flex-col bg-gray-200 shadow-md border border-gray-300 rounded-sm focus:outline-none focus:ring-4 focus:ring-gray-600">  
            <img className="w-1/3 object-fill sm:w-full sm:h-78 bg-contain md:w-60 md:h-60 rounded-tl-sm rounded-bl-sm sm:rounded-t sm:rounded-bl-none" src=
                {item.poster_path === null || item.poster_path === undefined
                    ? DefaultImage  
                    : `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`}
                alt={`Imagen de portada de ${path === '/tv' ? item.name : item.title}`}
            />  
            <div className="w-2/3 sm:w-full p-3 ">
                <h3 className="text-xl font-semibold text-gray-800">{path === '/tv' ? formatWords(item.name, 30) : formatWords(item.title, 30)}</h3>
                <p className="text-sm font-normal text-gray-600">{path === '/tv' ? item.first_air_date : item.release_date}</p>
                <p className="text-lg sm:hidden">{formatWords(item.overview, 80)}</p>
            </div>  
        </button>
    )
}

export default FilteredItem