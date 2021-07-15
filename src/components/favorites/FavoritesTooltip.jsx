import { useState } from 'react'
import ModalSecundary from '../global/ModalSecondary'

const FavoritesTooltip = () => {
    const [ showModal, setShowModal ] = useState(false)
  
    const handleChange = () => {
      setShowModal(!showModal)
    }

    return (
        <>
            <button className="w-6 h-6 ml-2 mt-2 text-sm font-medium bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300" onClick={handleChange} >
                ?
            </button>
            
            <ModalSecundary 
                titleModal={'Almacenamiento de favoritos'}
                messageModal={'Los favoritos que guardes solo estarán disponibles en el dispositivo en el que los guardaste.'}
                showButtonModal={false}
                showModal={showModal} 
                setShowModal={setShowModal} 
            />
        </>
    )
}

export default FavoritesTooltip
