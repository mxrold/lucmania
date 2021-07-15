import Titleh3 from '../global/Titleh3'    
import TextParagraph from '../global/TextParagraph'    
import ButtonSecondary from './ButtonSecondary'

const ModalSecondary = (props) => {
    const { titleModal, messageModal, showButtonModal, showModal, setShowModal, removeFavorite } = props

    const handleChange = () => {
        setShowModal(!showModal)
    }

    return (
    <>
    {
        showModal === false
        ? null
        :   <>
            <div className="flex justify-center items-center fixed inset-0 z-20">
                <div className="w-10/12 md:w-max h-max mx-auto max-w-sm">
                    <div className="flex flex-col w-full p-3 md:p-6 bg-gray-100 rounded-md">
                        <div className="mb-2 border-b-2 border-gray-200">
                            <Titleh3 title={titleModal} />
                        </div>
                        <div>
                            <TextParagraph text={messageModal} />
                        </div>
                        <div className="flex justify-end items-center mt-4">
                            <ButtonSecondary 
                                text={'Cerrar'} 
                                handleChange={handleChange} 
                                background={'bg-gray-200'} 
                                textColor={'text-gray-800'}
                                bgHover={'hover:bg-gray-300'} 
                            />
                            {
                                showButtonModal === false
                                ? null
                                : <ButtonSecondary 
                                    text={'Eliminar'} 
                                    handleChange={() => removeFavorite(true)} 
                                    background={'bg-red-500'} 
                                    margin={'ml-2'}
                                    textColor={'text-gray-100'}
                                    bgHover={'hover:bg-red-600'}             
                                />
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="opacity-25 fixed inset-0 z-15 bg-black"></div>
        </>
    }
    </>
  )
}

export default ModalSecondary