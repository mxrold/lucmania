import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import FetchData from '../utils/FetchData'
import NumberRandom from '../utils/NumberRandom'
import FilteredDetailItem from '../components/FilteredDetailItem'
import Loader from '../components/global/Loader'
import MetaHead from '../components/global/MetaHead'
import Titleh2 from '../components/global/Titleh2'
import FilteredList from '../components/FilteredResults/FilteredList'
import FilteredButton from '../components/FilteredResults/FilteredButton'

const FilteredResults = () => {
  const [genre, setGenre] = useState([])
  const [path, setPath] = useState('')
  const [dataRandom, setDataRandom] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const currentPath = location.pathname.replace('/results', '')
    setPath(currentPath)

    const idGenre = sessionStorage.getItem('Id')
    const nameGenre = sessionStorage.getItem('Name')
    if (idGenre === null || nameGenre === null) {
      fetchIdLatest(currentPath)
      setGenre([null, 'todos los géneros'])
    } else {
      fetchData(currentPath)
      const formatName = nameGenre.charAt(0).toLowerCase() + nameGenre.slice(1)
      setGenre([idGenre, formatName])
    }
  }, [])

  const fetchIdLatest = async (currentPath) => {
    setLoading(true)
    const URL_ID_LATEST = `${currentPath}/latest`
    const responseId = await FetchData(URL_ID_LATEST, '')

    const data = []
    while (data.length < 6) {
      const URL_RANDOM = `${currentPath}/${NumberRandom(1, responseId.id)}`
      const responseData = await FetchData(URL_RANDOM, '')
      if (responseData.status_code !== 34 && responseData.adult !== true) {
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
    const data = []

    while (data.length < 6) {
      const getRandom = NumberRandom(0, items.length)
      data.push(items[getRandom])
      items.splice(getRandom, 1)
    }

    if (data.length === 6) {
      setDataRandom(data)
    }
  }

  const handleNewResults = () => {
    if (genre[0] === null || genre[1] === null) {
      fetchIdLatest(path)
    } else {
      fetchData(path)
    }
  }

  const nameFormatPath = () => path === '/movie' ? 'Películas' : 'Series'

  return (
    <React.Fragment>
      <MetaHead
        title={`${nameFormatPath()} - Resultados`}
        description='¿Te gustó algo y quieres conocer más? Ingresa a cada película o serie para ver su información, puntuaciones de usuarios, resumen, elenco principal y mucho más.'
        url={`https://lucmania.co${path}/results`}
      />

      <main className='flex flex-col justify-center items-center lg:h-screen py-9 bg-gray-100'>
        <div className='w-11/12 sm:w-5/6 max-w-screen-2xl mx-auto'>
          <Titleh2 title={`${nameFormatPath()} - ${genre[1]}`} />
          {
            loading === true || dataRandom === undefined
              ? <Loader numberItems={6} />
              : <React.Fragment>
                <FilteredList
                  dataRandom={dataRandom}
                  path={path}
                  showModal={showModal}
                  setShowModal={setShowModal}
                />

                <FilteredButton handleNewResults={handleNewResults} genre={genre} />
              </React.Fragment>
          }
        </div>

        <FilteredDetailItem showModal={showModal} setShowModal={setShowModal} />

      </main>
    </React.Fragment>
  )
}

export default FilteredResults
