import Heart from '../../assets/static/heart-fill.png'
import HeartOutline from '../../assets/static/heart-outline.png'

const DetailAddFavorite = ({ details, path }) => {
  const key = `${path.replace('/', '')}-fav-${details.id}`
  const LIMIT_FAVORITES = 250

  const handleFavorite = () => {
    VerifyIconFavorite()
    if(localStorage.getItem(key)) {
      removeFavorite(key)
    } else {
      addFavorite(key)
    }
  }
    
  const addFavorite = (key) => {
    if(localStorage.length >= LIMIT_FAVORITES) {
      alert(`Completaste el almacenamiento de ${LIMIT_FAVORITES} favoritos`)
    } else {
      const date = new Date()
      const value = {
        path:path, 
        date: date,
        id: details.id, 
        name: details.name,
        title: details.title,
        poster_path: details.poster_path,
        first_air_date: details.first_air_date,
        release_date: details.release_date
      }
      localStorage.setItem(key, JSON.stringify(value))
    }
  }

  const removeFavorite = (key) => {
    const removeMessage = confirm('¿Quieres eliminar este favorito?')
    if(removeMessage) {
      localStorage.removeItem(key)
    }
  }

  const VerifyIconFavorite = () => {
    if(localStorage.getItem(key)) {
      return Heart
    } else {
      return HeartOutline
    }
  }

  return (
      <div className="flex items-center justify-center w-2/4 md:w-auto">
          <button onClick={handleFavorite} className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gray-700 rounded-full focus:outline-none">
              <img src={VerifyIconFavorite()} alt="Agregar a favoritos" title="Agregar a favoritos" />
          </button>
      </div>
  )
}

export default DetailAddFavorite
