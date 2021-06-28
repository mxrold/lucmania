import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import FetchData from '../utils/FetchData'
import DefaultImage from '../assets/static/default-poster-image.jpg'
import DefaultCastImage from '../assets/static/default-cast-image.jpg'
import Heart from '../assets/static/heart-fill.png'
import HeartOutline from '../assets/static/heart-outline.png'

const FilteredDetailItem = ({ setShowModal, showModal }) => {
  const [ path, setPath ] = useState('')
  const [ dataDetails, setDataDetails ] = useState([])
  const [ dataVideos, setDataVideos ] = useState([])
  const [ dataCast, setDataCast ] = useState([])
  const [ dataCertification, setDataCertification ] = useState('')
  const location = useLocation()


  useEffect(() => {
    const currentPath = location.pathname.replace('/results', '')
    setPath(currentPath)

    const id = sessionStorage.getItem('IdItem')

    fetchDataDetails(currentPath, id)
    fetchDataVideos(currentPath, id)
    fetchDataCredits(currentPath, id)
    fetchDataCertifications(currentPath, id)
  }, [showModal === true])

  const fetchDataDetails = async (currentPath, id) => {
    const URL = `${currentPath}/${id}`
    const response = await FetchData(URL, '')
    setDataDetails(response)
  }

  const fetchDataVideos = async (currentPath, id) => {
    const URL = `${currentPath}/${id}/videos`
    const response = await FetchData(URL, '', 'en-US')
    setDataVideos(response.results)
  }

  const fetchDataCredits = async (currentPath, id) => {
    const URL = `${currentPath}/${id}/credits`
    const response = await FetchData(URL, '')
    setDataCast(response)
  }

  const fetchDataCertifications = async (currentPath, id) => {
    const URL = `${currentPath}/${id}/${currentPath === '/tv' ? 'content_ratings' : 'release_dates'}`
    const response = await FetchData(URL, '')

    if(response.results !== undefined) {
      for(let i = 0; i < response.results.length; i++) {
        if(response.results[i].iso_3166_1 === 'US') {
          setDataCertification(response.results[i])
        }
      }
    }
  }

  const formatRuntime = (minutes) => {
    const minutesToHours = (minutes / 60).toFixed(2)
    const hours = Math.trunc(minutesToHours)
    const restMinutes = Math.abs(hours - minutesToHours).toFixed(2)

    if(restMinutes > 0.01) {
     const resto = Math.round(restMinutes * 60)
     return `${hours}h ${resto}min`
    }
    return `${hours}h 00min`
  }

  const formatVoteAverage = (votes) => {
    if(votes < 50) {
      return 'bg-red-400'
    } else if(votes > 50 && votes < 70) {
      return 'bg-yellow-400'
    } else {
      return 'bg-green-400'
    }
  }

  const handleChange = () => {
    setShowModal(!showModal)
  }
console.log(dataDetails)
  return (
    <>
    {
      showModal !== true
      ? null
      : <>
          <section className="flex justify-center items-center fixed inset-0 z-50">
            <div className="w-11/12 h-4/5 sm:h-4/6 sm:w-5/6 max-w-screen-2xl mx-auto overflow-y-auto">
              <div className="w-full p-3 sm:p-6 bg-gray-800 rounded-sm shadow-lg">
                <div className="relative flex flex-col sm:flex-row w-full">
                  <div className="absolute sm:-top-4 left-full">
                    <button className="fixed -ml-6 sm:-ml-4 w-8 h-8 font-semibold bg-yellow-300 text-gray-800 bg-opacity-80 rounded-full" onClick={handleChange}>X</button>
                  </div>
                  <div className="min-w-max mx-auto sm:mx-0 sm:mr-8">
                    <img className="w-32 h-48 sm:w-full sm:h-72 mx-auto sm:mx-0 bg-contain object-fill rounded-md" src=
                    {dataDetails.poster_path === null || dataDetails.poster_path === undefined
                        ? DefaultImage
                        : `https://www.themoviedb.org/t/p/w220_and_h330_face/${dataDetails.poster_path}`}
                        alt={``}
                    />
                    {
                      dataVideos === undefined && dataVideos.length === 0
                      ? null
                      : <div className="w-full mt-2 p-1 text-center" >
                          <a 
                            className="text-md font-medium text-gray-400 hover:text-gray-200"
                            href={`https://www.youtube.com/watch?v=${dataVideos[0].key}`} 
                            target="_blank">
                              Ver trailer en Youtube
                          </a>
                      </div>
                    }
                  </div>
                  <div className="w-full sm:w-4/5 py-3">
                    <div className="">
                      <h2 className="text-3xl font-semibold sm:text-4xl text-gray-200">
                        {path === '/tv' ? dataDetails.name : dataDetails.title}
                      </h2>
                      <div className="flex items-center mt-2 sm:mt-1 text-lg text-gray-300">
                        {
                          dataCertification.length === undefined || dataCertification.length === 0
                          ? null
                          : <>
                              <p className="px-0.5 border-2 border-gray-700 rounded-sm">
                                {path === '/tv' ? dataCertification.rating : dataCertification.release_dates[0].certification}
                              </p>
                              <span className="w-1 h-1 mx-4 bg-gray-700 rounded-full"></span>
                            </>
                        }
                        {
                          dataDetails === undefined || dataDetails.first_air_date === null || dataDetails.last_air_date === null
                          ? null
                          : <p>
                              {path === '/tv' ? dataDetails.first_air_date.slice(0, 4) + ' - ' + dataDetails.last_air_date.slice(0, 4) : dataDetails.release_date.slice(0, 4)}
                            </p>  
                        }
                        {
                          dataDetails.runtime ===  null || path === '/tv'
                          ? null
                          : <> 
                              <span className="w-1 h-1 mx-4 bg-gray-600 rounded-full"></span>
                              <p>
                                {formatRuntime(dataDetails.runtime)}
                              </p>
                            </>
                        }
                      </div>
                      <div>
                        {
                        path === '/tv'
                        ?  <div className="flex mt-3 sm:mt-2">
                              <p className="mr-4 text-md text-blue-300 text-opacity-80">
                                Temporadas: 
                                <span className="text-md text-gray-300"> {dataDetails.number_of_seasons}</span>
                              </p>
                              <p className="text-md text-blue-300 text-opacity-80">
                                Capítulos: 
                                <span className="text-md text-gray-300"> {dataDetails.number_of_episodes}</span>
                              </p>
                          </div>
                        : null
                      }
                      { 
                        dataDetails.genres === undefined && dataDetails.genres.length === 0
                        ? null
                        : <div className="mt-3 sm:mt-2">
                            <p className="text-md text-blue-300 text-opacity-80">
                              Género: 
                              <span className="text-md text-gray-300"> {dataDetails.genres.map(item => item.name + ' - ')}</span>
                            </p>
                          </div>
                      }
                      {
                        dataDetails.original_title  === '' || dataDetails.original_name === ''
                        ? null 
                        : <div className="mt-3 sm:mt-2">
                            <p className="text-md text-blue-300 text-opacity-80">
                              Título original: 
                              <span className="text-md text-gray-300"> {path === '/tv' ? dataDetails.original_name : dataDetails.original_title}</span>
                            </p>
                          </div>
                      }
                      {
                        dataDetails.spoken_languages.length === 0
                        ? null
                        : <div className="mt-3 sm:mt-2">
                            <p className="text-md text-blue-300 text-opacity-80">
                              Idioma original: 
                              <span className="text-md text-gray-300"> {dataDetails.spoken_languages[0].name}</span>
                            </p>
                          </div>
                      }
                      {
                        path === '/tv' && dataDetails.created_by.length === undefined
                        ? <div className="mt-3 sm:mt-2">
                            <p className="text-md text-blue-300 text-opacity-80">
                              Creado por: 
                              <span className="text-md text-gray-300"> {dataDetails.created_by.map(item => item.name + ' - ')}</span>
                            </p>
                          </div>
                        : null
                      }
                      </div>
                      <div className="flex justify-center sm:justify-start mt-5">
                        <div className="flex w-2/4 sm:w-auto items-center justify-center">
                          <div className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mr-2 ${formatVoteAverage(dataDetails.vote_average * 10)} bg-opacity-90 rounded-full`}>
                            <span className="text-md font-semibold text-gray-900">{dataDetails.vote_average * 10}</span>
                            <span className="text-xs font-semibold text-gray-800">%</span>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">Puntuaciones</p>
                            <p className="text-sm text-gray-400"> de  usuarios</p>
                          </div>
                        </div>
                        <span className="w-px h-max mx-2 sm:mx-4 bg-gray-700"></span>
                        <div className="flex items-center justify-center w-2/4 sm:w-auto">
                          <button className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-full">
                            <img src={Heart} alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                    {
                      dataDetails.overview === ''
                      ? null
                      : <div className="mt-5">
                          <h3 className="text-xl font-semibold text-gray-200">Resumen</h3>
                          <p className="mt-1 text-md text-gray-300 ">
                            {dataDetails.overview}
                           </p>
                        </div>
                    }
                  </div>
                </div>
                {
                  dataCast.cast === undefined
                  ? null
                  : <div className="w-full sm:mx-4 my-8">
                      <h3 className="text-xl font-semibold text-gray-200">Elenco principal</h3>
                      <div className="flex mt-4 scroll-x">
                        {
                          dataCast.cast.slice(0, 12).map(item => (
                            <article className="relative scroll-x-card mr-4 sm:mr-6 mb-4">
                              <figure className="w-20 sm:w-24 h-max">
                                <img
                                className="w-20 h-32 sm:w-24 sm:h-36 bg-contain rounded-md"
                                src={item.profile_path === null
                                  ? DefaultCastImage
                                  : `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.profile_path}`}
                                alt={`Imagen de ${item.original_name}`}
                                title={`Imagen de ${item.original_name}`}
                                />
                                <figcaption className="px-1 text-sm font-medium text-gray-400">{item.original_name}</figcaption>
                              </figure>
                            </article>
                          ))
                        }
                      </div>
                    </div>
                }
                <div className="flex items-center justify-center">
                  <button
                    className="py-1 px-6 font-semibold bg-yellow-300 text-gray-800 bg-opacity-80 rounded-md"
                    type="button"
                    onClick={handleChange}
                  >
                    Volver atras
                  </button>
                </div>
              </div>
            </div>
          </section>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      }
    </>
  )
}

export default FilteredDetailItem