import { useState, useEffect } from 'react'
import FavoritesEmptyState from './FavoritesEmptyState'
import FavoritesItem from './FavoritesItem'
import FilteredDetailItem from './FilteredDetailItem'

const Favorites = () => {
  const [ path, setPath ] = useState('')
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
          setPath('/tv')
        } else {
          dataMovie.push(fav_values)
          setPath('/movie')
        }
      }
    }
    setFavoritesDataTv(dataTv)        
    setFavoritesDataMovie(dataMovie)

  }, [showModal === false])
  
  return (
    <div className="h-max py-9 bg-gray-100">
      <div className="w-11/12 sm:w-5/6 max-w-screen-2xl h-screen  mx-auto">
        {
          localStorage.length === 0
          ? <FavoritesEmptyState />
          : <>
              <div className="flex justify-between items-center border-b-2 border-gray-200">
                <h2 className="text-3xl font-semibold sm:text-4xl text-gray-800">Favoritos</h2>
                <div>
                  <p className="text-lg text-gray-700">{`${favoritesDataMovie.length + favoritesDataTv.length} / ${LIMIT_FAVORITES}`}</p>
                </div>
              </div>

              {
                favoritesDataMovie.length === 0 
                ? null
                : <>
                    <div className="flex justify-between items-center mt-4">
                      <h3 className="text-xl font-semibold text-gray-800">Películas</h3>
                    </div>
                    <div className="scroll-x">
                      {           
                        favoritesDataMovie.map(item => 
                          <FavoritesItem item={item} path={item.path} showModal={showModal} setShowModal={setShowModal} />
                        )                           
                      }
                    </div>
                  </>
              }
                                      
              {
                favoritesDataTv.length === 0 
                ? null
                : <>
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold text-gray-800">Series</h3>
                    </div>
                    <div className="scroll-x">
                      {           
                        favoritesDataTv.map(item => 
                          <FavoritesItem item={item} path={item.path} showModal={showModal} setShowModal={setShowModal} />
                        )                           
                      }
                    </div>
                </>
            }

            <FilteredDetailItem showModal={showModal} setShowModal={setShowModal} />
          </>
        }
      </div>
    </div>
  )
}

export default Favorites