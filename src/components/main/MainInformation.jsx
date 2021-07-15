import MainInformationButtons from './MainInformationButtons'
import MainInformationText from './MainInformationText'

const MainInformation = () => {
  return (
    <div className='px-3 md:px-6 max-w-screen-xl mx-auto'>
      <MainInformationText />
      <MainInformationButtons />
    </div>
  )
}

export default MainInformation
