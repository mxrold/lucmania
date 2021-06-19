import { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import FetchData from '../utils/FetchData'
import GenresItem from './GenresItem'
import Button from './global/Button'

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

    }, [])


    const nameFormatPath = () => path === '/movie' ? 'películas' : 'series'

    const handleRouteBtn = () => history.push(`${path}/results`)

    return (
        <main className="flex flex-col justify-center items-center height-90 py-9 bg-gray-100">
            {
                genres.length === 0
                ? <h1>Cargando</h1>
                : <>
                    <div className="w-5/6 max-w-screen-xl mx-auto mb-4">
                        <h2 className="text-3xl font-semibold sm:text-4xl text-gray-800">Géneros de {nameFormatPath()}</h2>
                        <p className="text-lg sm:text-xl text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>

                    <div className="grid grid-cols-2 grid-rows-2 gap-4 w-5/6 max-w-screen-xl mx-auto sm:grid-cols-3 sm:grid-rows-3 md:grid-cols-4 md:grid-rows-4">
                        {
                            genres.map(item => 
                                <GenresItem item={item} />
                            )
                        }
                    </div>
                    <div className="flex flex-col justify-center items-center w-5/6 max-w-screen-xl mx-auto mt-4">
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
                </>
            }
        </main>
    )
}

export default Genres