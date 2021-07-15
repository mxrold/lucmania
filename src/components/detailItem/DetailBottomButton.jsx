import ButtonSecondary from '../global/ButtonSecondary'

const DetailBottomButton = ({ handleChange }) => {
  return (
    <div className='flex items-center justify-center mt-8'>
      <ButtonSecondary 
        text={'Volver atras'} 
        handleChange={handleChange} 
        background={'bg-yellow-300'} 
        textColor={'text-gray-800'}
        bgHover={'hover:bg-yellow-400'} 
      />
    </div>
  )
}

export default DetailBottomButton
