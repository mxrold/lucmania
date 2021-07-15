import Logotype from '../assets/static/logotype.svg'
import TMDB from '../assets/static/tmdb-logo.svg'

const Footer = () => {
  return (
    <footer className='py-3 px-6 sm:py-6 sm:px-12 bg-gray-300'>
      <div className='md:flex md:flex-row md:justify-between md:items-center w-full max-w-screen-2xl h-max mx-auto'>
        <div className='flex justify-center max-w-screen-2xl'>
          <img src={Logotype} alt='Logo Lucmania' title='Logo Lucmania' />
          <div className='ml-4 text-sm font-medium text-gray-800'>
            <p>© 2021 Lucmania</p>
            <p>Hecho desde Argentina con 🖤</p>
          </div>
        </div>
        <div className='flex justify-center max-w-screen-2xl mt-12 md:mt-0 text-sm font-medium text-gray-800'>
          <p className='max-w-xs mr-4'>
            La información proporcionada en esta plataforma pertenece a
            <a href='https://www.themoviedb.org/documentation/api' target='_blank' className='hover:underline'> The Movie Database</a>
          </p>
          <img className='w-20 h-12' src={TMDB} alt='Logo The Movie Database' title='Logo The Movie Database' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
