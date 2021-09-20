import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/static/logo.svg'

const Header = () => {
  return (
    <header className='h-max p-3 bg-yellow-300 border-b-2 border-gray-900'>
      <div className='sm:container sm:flex sm:flex-row sm:justify-between sm:items-center max-w-screen-2xl mx-auto'>
        <figure className='mb-4 sm:mb-0'>
          <Link to='/'>
            <img className='w-48 mx-auto' src={Logo} alt='Logo Lucmania' />
          </Link>
        </figure>
        <nav className='max-w-xs mx-auto sm:mx-0 sm:w-2/4'>
          <ul className='flex items-center justify-around sm:justify-between text-base sm:text-lg font-medium tracking-wide'>
            <li>
              <a
                className='text-gray-700 hover:text-gray-900'
                href='/movie'
              >
                Películas
              </a>
            </li>
            <li>
              <a
                className='text-gray-700 hover:text-gray-900'
                href='/tv'
              >
                Series
              </a>
            </li>
            <li>
              <Link
                className='text-gray-700 hover:text-gray-900'
                to='/favorites'
              >
                Favoritos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
