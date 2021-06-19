import { Link } from 'react-router-dom'
import Logo from '../assets/static/logo.svg'

const Header = () => {
    return (
        <header className="md:height-10 p-3 bg-yellow-300 border-b-2 border-gray-900">
            <div className="sm:container sm:flex sm:flex-row sm:justify-between sm:items-center max-w-screen-xl mx-auto">
                <figure className="mb-4 sm:mb-0">
                    <Link to="/">
                        <img className="w-60 mx-auto" src={Logo} alt="Logo Lucmania" />
                    </Link>
                </figure>
                <nav>
                    <ul>
                        <li className="w-8/12 mx-auto sm:w-max text-center">
                            <Link 
                                className="w-max px-3 py-1 text-base sm:text-lg font-medium tracking-wide text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600" 
                                to="#"
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
