import React, { useState } from 'react'
import ModalSecondary from '../global/ModalSecondary'
import Heart from '../../assets/static/heart-fill.png'
import HeartOutline from '../../assets/static/heart-outline.png'

const DetailAddFavorite = ({ details, path }) => {
  const [ titleModal, setTitleModal ] = useState('')
  const [ messageModal, setMessageModal ] = useState('')
  const [ showButtonModal, setButtonModal ] = useState(false)
  const [ showModal, setShowModal ] = useState(false)
  const key = `${path.replace('/', '')}-fav-${details.id}`
  const LIMIT_FAVORITES = 250

  const handleFavorite = () => {
    VerifyIconFavorite()
    if (localStorage.getItem(key)) {
      removeFavorite()
    } else {
      addFavorite()
    }
  }

  const addFavorite = () => {
    try {
      if (localStorage.length >= LIMIT_FAVORITES) {
        returnModalContent('Almacenamiento lleno', `Completaste el almacenamiento de ${LIMIT_FAVORITES} favoritos.`, false)
      } else {
        const date = new Date()
        const value = {
          path: path,
          date: date,
          id: details.id,
          name: details.name,
          title: details.title,
          poster_path: details.poster_path,
          first_air_date: details.first_air_date,
          release_date: details.release_date
        }
        localStorage.setItem(key, JSON.stringify(value))
      }
    } catch (error) {
      returnModalContent('¡Oops!', 'No se pudo guardar el favorito. Intenta agregarlo nuevamente.', false)
    }
  }

  const removeFavorite = (remove) => {
    try {
      returnModalContent('Eliminar favorito', 'Si continúas, se borrará permanentemente el favorito de la lista.', true)
      if(remove) {
        localStorage.removeItem(key)
        setShowModal(false)
      } 
    } catch (error) {
      returnModalContent('¡Oops!', 'No se pudo eliminar el favorito. Intenta borrarlo nuevamente.', false)
    }
  }

  const VerifyIconFavorite = () => {
    if (localStorage.getItem(key)) {
      return Heart
    } else {
      return HeartOutline
    }
  }

  const returnModalContent = (title, message, button) => {
    setShowModal(true)
    setTitleModal(title)
    setMessageModal(message)
    setButtonModal(button)
  }

  return (
    <React.Fragment>
      <div className='flex items-center justify-center w-2/4 md:w-auto'>
        <button onClick={handleFavorite} className='flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gray-700 rounded-full focus:outline-none'>
          <img src={VerifyIconFavorite()} alt='Agregar a favoritos' title='Agregar a favoritos' />
        </button>
      </div>

      <ModalSecondary 
        titleModal={titleModal}
        messageModal={messageModal}
        showButtonModal={showButtonModal}
        showModal={showModal} 
        setShowModal={setShowModal} 
        removeFavorite={removeFavorite}
      />
    </React.Fragment>
  )
}

export default DetailAddFavorite
