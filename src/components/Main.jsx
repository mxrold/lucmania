import { useHistory } from "react-router-dom"
import Button from './global/Button'
import ImageMain from '../assets/static/main-image.svg'

const Main = () => {
    const history = useHistory()

    const dataButton = [
        {
            title: 'Películas',
            key: 'movie'
        },
        {
            title: 'Series',
            key: 'tv'
        }
    ]

    const handleGetGenders = (genre) => {
        history.push(`/${genre}`)
    }

    return (
        <main className="flex justify-center items-center height-90 p-3 bg-yellow-300 md:px-10">
            <div className="flex flex-col justify-center md:flex-row md:items-center max-w-screen-2xl">
            <div className="relative top-4 right-4 h-max bg-gray-800 rounded">
                <div className="relative bottom-4 left-4 p-6 text-center md:w-full md:text-left bg-gray-300 border-2 border-gray-800 rounded">
                    <h1 className="text-4xl font-bold sm:text-6xl text-gray-900">Lorem ipsum dolor sit amet</h1>
                    <h3 className="mb-6 text-lg font-normal sm:text-2xl  text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h3>
                    <div className="mb-6 sm:mb-0 w-full flex justify-around">
                        {
                            dataButton.map(data => 
                                <Button 
                                    text={data.title} 
                                    key={data.key} 
                                    onClick={() => handleGetGenders(data.key)}
                                    width={'w-2/5'}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
            <figure className=" md:w-2/4">
                <img className="w-64 mx-auto md:w-96" src={ImageMain} alt=""/>
            </figure>
            </div>
        </main>
    )
}

export default Main
