import { useState, useEffect } from 'react'
import MetaHead from '../components/global/MetaHead'
import EmptyComponent from '../components/global/EmptyComponent'
import FilteredDetailItem from '../components/FilteredDetailItem'
import FavoritesInformationText from '../components/favorites/FavoritesInformationText'
import FavoritesList from '../components/favorites/FavoritesList'

const Favorites = () => {
  const [ favoritesDataTv, setFavoritesDataTv ] = useState([])  
  const [ favoritesDataMovie, setFavoritesDataMovie ] = useState([])
  const [ showModal, setShowModal ] = useState(false)
  const LIMIT_FAVORITES = 250

  useEffect(() => {
    let dataTv = []
    let dataMovie = []
    if(localStorage.length > 0) {
      for(let i = 0; i < localStorage.length; i++) {
        let fav_keys = localStorage.key(i)
        let fav_values = JSON.parse(localStorage.getItem(fav_keys))
        if(fav_keys.includes('tv-fav')) {
          dataTv.push(fav_values)
        } else {
          dataMovie.push(fav_values)
        }
      }
    }
    setFavoritesDataTv(dataTv)        
    setFavoritesDataMovie(dataMovie)

  }, [showModal === false])
  
  return (
    <>
      <MetaHead 
        title="Favoritos"
        description="En cada búsqueda guarda todo el contenido que te guste para nunca perderte lo que quieras ver luego."
        url="https://lucmania.co/favorites"
      />

      <div className="h-max py-9 bg-gray-100">
        <div className="w-11/12 sm:w-5/6 max-w-screen-2xl h-screen  mx-auto">
          {
            localStorage.length === 0
            ? <EmptyComponent 
                title={'No tienes ningún favorito agregado.'}   
                text={'¡Ve a elegir las películas y series que más te gusten!'}
                pathText={'Volver al inicio'}
              />
            : <>
                <FavoritesInformationText 
                  lengthMovie={favoritesDataMovie.length} 
                  lengthTv={favoritesDataTv.length} 
                  limit={LIMIT_FAVORITES}
                />

                <FavoritesList list={favoritesDataMovie} category={'Películas'} showModal={showModal} setShowModal={setShowModal} />

                <FavoritesList list={favoritesDataTv} category={'Series'} showModal={showModal} setShowModal={setShowModal} />
                                        
                <FilteredDetailItem showModal={showModal} setShowModal={setShowModal} />
            </>
          }
        </div>
      </div>
    </>
  )
}

export default Favorites