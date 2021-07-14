import { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import FetchData from '../utils/FetchData'
import GenresItem from './GenresItem'
import Button from './global/Button'
import Loader from './global/Loader'
import MetaHead from './global/MetaHead'

const Genres = () => {
    const [ path, setPath ] = useState('')
    const [ genres, setGenres ] = useState([])
    const location = useLocation()
    const history = useHistory()

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

    const handleRouteBtn = () => history.push(`${path}/results`)

    return (
        <>
            <MetaHead 
                title={nameFormatPath()}
                description="¿No te decides sobre qué película o serie mirar? Escoge un género, encuentra lo que más te guste, mira sus detalles y guardalo en favoritos para no perderlo."
                url={`https://lucmania.co${path}`}
            />
            
            <main className="flex flex-col justify-center items-center py-9 bg-gray-100">
                {
                    genres.length === 0
                    ? <Loader numberItems={16} />
                    : <div className="w-11/12 sm:w-5/6 max-w-screen-2xl">
                        <div className="w-full mx-auto mb-4">
                            <h2 className="text-3xl font-semibold sm:text-4xl text-gray-800">Géneros de {nameFormatPath()}</h2>
                            <p className="text-lg sm:text-xl text-gray-700">Si no eliges ningún género, la búsqueda se hará por todas las categorías.</p>
                        </div>

                        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full mx-auto sm:grid-cols-3 sm:grid-rows-3 lg:grid-cols-4 lg:grid-rows-4">
                            {
                                genres.map(item => 
                                    <GenresItem item={item} />
                                )
                            }
                        </div>
                        <div className="flex flex-col justify-center items-center w-full mx-auto mt-4">
                            <Button 
                                text={`Buscar ${nameFormatPath()}`} 
                                onClick={() => handleRouteBtn()}
                                width={'w-full sm:w-60 md:w-80'}
                            />
                            <a 
                                className="my-4 text-lg text-gray-700 border-t-2 border-gray-400 hover:text-gray-900" 
                                href={path === '/tv' ? '/movie' : '/tv'}
                            >
                                Buscar por {path === '/tv' ? 'películas' : 'series'}
                            </a>
                        </div>
                    </div>
                }
            </main>
        </>
    )
}

export default Genres