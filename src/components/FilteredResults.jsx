import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import FetchData from '../utils/FetchData'
import NumberRandom from '../utils/NumberRandom'
import Button from './global/Button'
import Loader from './global/Loader'
import DefaultImage from '../assets/static/default-poster-image.jpg'

const FilteredResults = () => {
    const [ genre, setGenre ] = useState([])
    const [ path, setPath ] = useState('')
    const [ dataRandom, setDataRandom ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const currentPath = location.pathname.replace('/results', '')
        setPath(currentPath)

        const idGenre = sessionStorage.getItem('Id')
        const nameGenre = sessionStorage.getItem('Name')
        if(idGenre === null || nameGenre === null) {
            fetchIdLatest(currentPath)
            setGenre([null, 'todos los géneros'])
        } else {
            fetchData(currentPath)
            const formatName = nameGenre.charAt(0).toLowerCase() + nameGenre.slice(1)
            setGenre([ idGenre,  formatName ])
        }

        sessionStorage.clear()
    }, [])

    const fetchIdLatest = async (currentPath) => {
        setLoading(true)
        const URL_ID_LATEST = `${currentPath}/latest`
        const responseId = await FetchData(URL_ID_LATEST, '')

        let data = []
        while(data.length < 6) {
            const URL_RANDOM = `${currentPath}/${NumberRandom(1, responseId.id)}`
            const responseData = await FetchData(URL_RANDOM, '')
            if(responseData.status_code !== 34 && responseData.adult !== true) {
                data.push(responseData)         
            }
        }

        setDataRandom(data)
        setLoading(false)
    }
    
    const fetchData = async (currentPath) => {
        setLoading(true)
        const URL_RANDOM = `/discover${currentPath}`
        const URL_SECOND_PARAM = `&with_genres=${genre}&page=${NumberRandom(1, 500)}&include_adult=false`
        const responseData = await FetchData(URL_RANDOM, URL_SECOND_PARAM)

        randomItems(responseData.results)
        setLoading(false)
    }

    const randomItems = (items) => {
        let data = []
      
        while(data.length < 6) {
            const getRandom = NumberRandom(0, items.length)
            data.push(items[getRandom])
            items.splice(getRandom, 1)
        }

        setDataRandom(data)
    }
    
    const handleNewResults = () => {
        if(genre[0] === null || genre[1] === null) {
            fetchIdLatest(path)
        } else {
            fetchData(path)
        }
    }

    const formatWords = (value, leng) => {
        if(value === undefined) {
            return 'Sin título'
        } else {
            return value.length > leng ? value.slice(0, leng) + '...' : value
        }
    } 

    return (
        <main className="flex flex-col justify-center items-center height-90 py-9 bg-gray-100">
            <div className="w-11/12 sm:w-5/6 max-w-screen-2xl mx-auto">
                <h2 className="mb-4 text-3xl font-semibold sm:text-4xl text-gray-800">{path === '/movie' ? 'Películas - ' : 'Series - '}{genre[1]}</h2>
                {  
                    loading === true 
                    ? <Loader numberItems={6}/>
                    : <>
                        <div className="grid grid-cols-1 grid-rows-6 gap-4 w-full mx-auto sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-6 lg:grid-rows-1">
                            {           
                                dataRandom.map(item => 
                                    <Link key={item.id} to="#" className="flex sm:flex-col bg-gray-200 shadow-md border border-gray-300 rounded-sm focus:outline-none focus:ring-4 focus:ring-gray-600">  
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
                                    </Link>
                                )                           
                            }
                        </div>
                        <div className="flex flex-col justify-center items-center w-full mt-4">
                            <Button 
                                text={`Volver a buscar sobre ${genre[1]}`} 
                                onClick={() => handleNewResults()}
                                width={'w-full sm:w-60 md:w-80 md:min-w-max'}
                            />
                            <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between w-full my-4 text-center">
                                <Link 
                                    className="w-60 sm:w-max mb-4 sm:mb-0 p-3 sm:p-0 text-lg text-gray-700 border-2 sm:border-t-2 sm:border-b-0 sm:border-l-0 sm:border-r-0 border-gray-400 rounded-lg sm:rounded-none hover:text-gray-900 hover:border-gray-600" 
                                    to={path}
                                >
                                    Buscar por géneros
                                </Link>
                                <a 
                                    className="w-60 sm:w-max p-3 sm:p-0 text-lg text-gray-700 border-2 sm:border-t-2 sm:border-b-0 sm:border-l-0 sm:border-r-0 border-gray-400 rounded-lg sm:rounded-none hover:text-gray-900 hover:border-gray-600" 
                                    href={path === '/tv' ? '/movie' : '/tv'}
                                >
                                    Buscar por {path === '/tv' ? 'películas' : 'series'}
                                </a>
                            </div>
                        </div>
                    </>
                }
            </div>
        </main>
    )
}

export default FilteredResults
