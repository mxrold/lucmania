import { useHistory } from 'react-router-dom'
import Button from '../global/Button'

const GenresButtons = ({ path, formatPath }) => {
    const history = useHistory()

    const handleRouteBtn = () => history.push(`${path}/results`)

    return (
        <div className="flex flex-col justify-center items-center w-full mx-auto mt-4">
            <Button 
                text={`Buscar ${formatPath}`} 
                onClick={() => handleRouteBtn()}
                width={'w-full sm:w-60 md:w-80'}
            />
            <a 
                className="my-4 text-lg text-gray-700 border-t-2 border-gray-400 hover:text-gray-900" 
                href={path === '/tv' ? '/movie' : '/tv'}
            >
                Buscar por {path === '/tv' ? 'películas' : 'series'}
            </a>
        </div>
    )
}

export default GenresButtons
