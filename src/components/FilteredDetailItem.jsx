import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import FetchData from '../utils/FetchData'
import DetailPoster from './detailItem/DetailPoster'
import DetailTrailerVideo from './detailItem/DetailTrailerVideo'
import DetailCast from './detailItem/DetailCast'
import DetailInformation from './detailItem/DetailInformation'
import DetailOverview from './detailItem/DetailOverview'
import DetailVotes from './detailItem/DetailVotes'
import DetailAddFavorite from './detailItem/DetailAddFavorite'
import DetailTopButton from './detailItem/DetailTopButton'
import DetailBottomButton from './detailItem/DetailBottomButton'

const FilteredDetailItem = ({ setShowModal, showModal }) => {
  const [path, setPath] = useState('')
  const [dataDetails, setDataDetails] = useState([])
  const [dataVideos, setDataVideos] = useState([])
  const [dataCast, setDataCast] = useState([])
  const [dataCertification, setDataCertification] = useState('')
  const location = useLocation()

  useEffect(() => {
    const id = sessionStorage.getItem('IdItem')
    const pathItem = sessionStorage.getItem('PathItem')
    const currentPath = location.pathname.replace('/results', '')

    const getPath = () => {
      if (currentPath === '/tv' || currentPath === '/movie') {
        setPath(currentPath)
        return currentPath
      } else {
        setPath(pathItem)
        return pathItem
      }
    }

    fetchDataDetails(getPath(), id)
    fetchDataVideos(getPath(), id)
    fetchDataCredits(getPath(), id)
    fetchDataCertifications(getPath(), id)
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

    if (response.results !== undefined) {
      for (let i = 0; i < response.results.length; i++) {
        if (response.results[i].iso_3166_1 === 'US') {
          setDataCertification(response.results[i])
        }
      }
    }
  }

  const handleChange = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      {
        showModal === false
        ? null
        : <>
          {
            dataDetails === undefined 
            ? null
            :  <section className='flex justify-center items-center fixed inset-0 z-10'>
                <div className='w-11/12 h-5/6 md:h-3/4 md:w-5/6 max-w-screen-2xl mx-auto overflow-y-auto'>
                  <div className='w-full p-3 md:p-6 bg-gray-800 rounded-sm shadow-lg'>
                    <div className='relative flex flex-col md:flex-row w-full'>

                      <DetailTopButton handleChange={handleChange} />

                      <div className='min-w-max mx-auto md:mx-0 md:mr-8'>
                        <DetailPoster poster={dataDetails.poster_path} title={path === '/tv' ? dataDetails.name : dataDetails.title} />
                        <DetailTrailerVideo video={dataVideos} />
                      </div>

                      <div className='w-full md:w-4/5 py-3'>
                        <DetailInformation dataDetails={dataDetails} path={path} dataCertification={dataCertification} />
                        <div className='flex justify-center md:justify-start mt-5'>
                          <DetailVotes votes={dataDetails.vote_average * 10} />
                          <span className='w-px h-max mx-2 md:mx-4 bg-gray-700' />
                          <DetailAddFavorite details={dataDetails} path={path} />
                        </div>
                        <DetailOverview overview={dataDetails.overview} />
                      </div>
                    </div>

                    <DetailCast cast={dataCast} />

                    <DetailBottomButton handleChange={handleChange} />
                  </div>
                </div>
              </section>
          }
          < div className='opacity-25 fixed inset-0 z-5 bg-black' />
        </>
      }
    </>
  )
}

export default FilteredDetailItem
