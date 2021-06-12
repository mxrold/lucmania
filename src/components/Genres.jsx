import { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import GenresItem from './GenresItem'
import Button from './global/Button'

const Genres = () => {
    const [ path, setPath ] = useState('')
    const [ genres, setGenres ] = useState([])
    const location = useLocation()
    const history = useHistory()

    useEffect(() => {
        const currentPath = location.pathname.replace('/genres-', '')
        const URL_BASE = `https://api.themoviedb.org/3/genre/${currentPath}/list?api_key=&language=es-MX`
        setPath(currentPath)

        const fetchGenres = async () => {
            const response = await fetch(URL_BASE)
            const responseJson = await response.json()
            setGenres(responseJson.genres)
        }

        fetchGenres()
    }, [location])

    const dataButton = [
        {
            title: 'Volver atras',
            key: 'back'
        },
        {
            title: 'Siguiente',
            key: 'next'
        }
    ]

    const handleRouteBtn = (func) => {
        if(func === 'back') {
            history.push('/')
        } else {
            history.push('/')
        }
    }

    return (
        <main className="flex flex-col justify-center items-center h-5/6 py-3 bg-gray-100">
            {
                genres.length === 0
                ? <h1>Cargando</h1>
                : <>
                    <div className="w-5/6 max-w-screen-xl mx-auto mb-4">
                        <h2 className="text-2xl font-semibold sm:text-4xl text-gray-800">Géneros de {path === 'movie' ? 'películas' : 'series'}</h2>
                        <p className="text-lg sm:text-xl text-gray-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>

                    <div className="grid grid-cols-2 grid-rows-2 gap-4 w-5/6 max-w-screen-xl mx-auto sm:grid-cols-3 sm:grid-rows-3 md:grid-cols-4 md:grid-rows-4">
                        {
                            genres.map(item => 
                                <GenresItem item={item} />
                            )
                        }
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between w-5/6 max-w-screen-xl mx-auto mt-4">
                        {
                            dataButton.map(item => 
                                <Button 
                                    text={item.title} 
                                    key={item.key}
                                    onClick={() => handleRouteBtn(item.key)}
                                    width={'w-full sm:w-48'}
                                />
                            )
                        }
                    </div>
                </>
            }
        </main>
    )
}

export default Genres