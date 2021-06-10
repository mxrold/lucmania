import Logo from '../assets/static/logo.svg'

const Header = () => {
    return (
        <header className="md:h-1/6 p-3 bg-yellow-400">
            <div className="sm:container sm:flex sm:flex-row sm:justify-between sm:items-center max-w-screen-xl mx-auto">
                <figure className="mb-4 sm:mb-0">
                    <img className="w-60 mx-auto" src={Logo} alt="" />
                </figure>
                <nav>
                    <ul>
                        <li className="w-9/12 mx-auto sm:w-max border-2 border-gray-900 rounded text-center">
                            <a className="p-3 text-base sm:text-lg font-medium tracking-wide text-gray-900" href="#">Favoritos</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
