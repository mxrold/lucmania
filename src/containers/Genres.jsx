import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import FetchData from '../utils/FetchData'
import Loader from '../components/global/Loader'
import MetaHead from '../components/global/MetaHead'
import GenresInformationText from '../components/genres/GenresInformationText'
import GenresList from '../components/genres/GenresList'
import GenresButtons from '../components/genres/GenresButtons'

const Genres = () => {
  const [path, setPath] = useState('')
  const [genres, setGenres] = useState([])
  const location = useLocation()

  useEffect(() => {
    const currentPath = location.pathname
    const URL_BASE = `/genre/${currentPath}/list`
    setPath(currentPath)

    const fetchGenres = async (url) => {
      const responseGenres = await FetchData(url, '')
      setGenres(responseGenres.genres)
    }

    fetchGenres(URL_BASE)

    return sessionStorage.clear()
  }, [])

  const nameFormatPath = () => path === '/movie' ? 'películas' : 'series'

  return (
    <>
      <MetaHead
        title={nameFormatPath()}
        description='¿No te decides sobre qué película o serie mirar? Escoge un género, encuentra lo que más te guste, mira sus detalles y guardalo en favoritos para no perderlo.'
        url={`https://lucmania.co${path}`}
      />

      <main className='flex flex-col justify-center items-center py-9 bg-gray-100'>
        {
                    genres.length === 0
                      ? <Loader numberItems={16} />
                      : <div className='w-11/12 sm:w-5/6 max-w-screen-2xl'>

                        <GenresInformationText category={nameFormatPath()} />

                        <GenresList genres={genres} />

                        <GenresButtons path={path} formatPath={nameFormatPath()} />

                        </div>
                }
      </main>
    </>
  )
}

export default Genres
