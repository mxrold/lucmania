import FormatString from '../../utils/FormatStrings'
import DefaultImage from '../../assets/static/default-poster-image.jpg'

const FavoritesItem = ({ item, path, showModal, setShowModal }) => {
  const handleDetailItem = () => {
    sessionStorage.setItem('IdItem', item.id)
    sessionStorage.setItem('PathItem', item.path)
    setShowModal(!showModal)
  }

  return (
    <>
      {
                item.poster_path === undefined
                  ? <p>...Cargando</p>
                  : <article className='scroll-x-card w-32 h-48 mt-2 mb-16 mr-2 ml-2 md:mr-6 shadow-md'>
                    <button onClick={handleDetailItem} className='w-32 text-base font-semibold text-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-600 rounded-md'>
                      <figure className='relative'>
                        <img
                          className='w-32 h-max rounded-md' src={item.poster_path === null || item.poster_path === undefined
                            ? DefaultImage
                            : `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`}
                          alt={`Imagen de portada de ${path === '/tv' ? item.name : item.title}`}
                          title={`Imagen de portada de ${path === '/tv' ? item.name : item.title}`}
                        />
                        <figcaption className='absolute bottom-0 left-full -ml-12 mb-1 px-2 text-xs font-medium bg-yellow-300 text-gray-800 rounded-full'>
                          {path === '/tv' ? FormatString(item.first_air_date, '', 4) : FormatString(item.release_date, '', 4)}
                        </figcaption>
                      </figure>
                      {path === '/tv' ? FormatString(item.name, 'Sin título', 25) : FormatString(item.title, 'Sin título', 25)}
                    </button>
                    </article>
            }
    </>
  )
}

export default FavoritesItem
