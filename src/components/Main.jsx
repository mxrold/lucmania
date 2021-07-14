import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import Footer from './Footer'
import Button from './global/Button'
import NumberRandom from '../utils/NumberRandom'

const Main = () => {
    const [ image, setImage ] = useState('')
    const history = useHistory()

    useEffect(() => {
        randomImages()
    }, [])

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
    
    const randomImages = () => {
        const images = [
            {
                link: 'tZFw8vJ/image-main-1'
            },
            {
                link: 'xfhwLbR/image-main-2'
            },
            {
                link: 'YtzmRJy/image-main-3'
            },
            {
                link: 'VwS8spy/image-main-4'
            },
            {
                link: '72qwJpb/image-main-5'
            },
            {
                link: '8NjvHQB/image-main-6'
            },
            {
                link: 'DCzByZJ/image-main-7'
            },
            {
                link: 'x6vdGvy/image-main-8'
            },
            {
                link: '2WT2qDk/image-main-9'
            },
            {
                link: 'JqpRDZP/image-main-10'
            },
            {
                link: '3vW28P0/image-main-11'
            },
            {
                link: 'NT3x13J/image-main-12'
            }
        ]

        const getRandom = images[NumberRandom(0, images.length)]
        const URL = `https://i.ibb.co/${getRandom.link}.png`
        setImage(URL)
    }

    return (
        <>
        <main className="h-full min-h-screen bg-gray-100">
            <div className="mx-auto py-24 text-center">
                <div className="px-3 md:px-6 max-w-screen-xl mx-auto">
                    <h1 className="text-4xl font-semibold sm:text-5xl text-gray-800">Descubre contenido aleatorio sin buscar por ti mismo</h1>
                    <p className="mt-6 text-lg font-normal sm:text-xl text-gray-700">¿No te decides sobre qué película o serie mirar? Escoge un género, encuentra lo que más te guste, mira sus detalles y guardalo en favoritos para no perderlo. </p>
                    <div className="flex flex-col sm:flex-row sm:justify-around sm:w-3/4 lg:w-2/4 mx-auto mt-12">
                        {
                            dataButton.map(data => 
                                <Button 
                                    text={data.title} 
                                    key={data.key} 
                                    onClick={() => handleGetGenders(data.key)}
                                    width={'w-full sm:w-5/12  sm:max-w-xs'}
                                />
                            )
                        }
                    </div>
                </div>
                <div className="w-full mt-24 mb-6">
                    <span className="block w-24 h-0.5 mx-auto mb-3 bg-blue-400"></span>
                    <h2 className="text-3xl font-medium sm:text-4xl text-gray-800">¿Qué puedes encontrar en Lucmania?</h2>
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-center mb-16 px-6 py-6 sm:px-16 sm:py-9 bg-blue-300 ">
                    <figure className="self-center lg:w-2/3 h-full max-w-2xl mx-auto">
                        {
                            image === ''
                            ? null
                            : <img className="w-64 sm:w-78 md:w-96 mx-auto" src={image} alt="Imagen de storyset.com" title="Imagen de storyset.com" />
                        }
                    </figure>
                    <div className="lg:w-1/3 max-w-2xl mx-auto">
                        <div className="relative top-2 right-2 max-w-xs h-max mx-auto mt-12 lg:my-4 bg-gray-700 rounded">
                            <div className="relative bottom-2 left-2 p-3 sm:p-4 md:w-full md:text-left bg-gray-300 border-2 border-gray-700 rounded">
                                <h3 className="text-xl font-medium sm:text-2xl  text-gray-700">Accede a los detalles</h3>
                                <p className="text-lg font-normal sm:text-xl text-gray-700">¿Te gustó algo y quieres conocer más? Ingresa a cada uno para ver su información, puntuaciones de usuarios, resumen, elenco principal y mucho más.</p>
                            </div>
                        </div>
                        <div className="relative top-2 right-2 max-w-xs mx-auto h-max mt-12 lg:my-4 bg-gray-700 rounded">
                            <div className="relative bottom-2 left-2 p-3 sm:p-4 md:w-full md:text-left bg-gray-300 border-2 border-gray-700 rounded">
                                <h3 className="text-xl font-medium sm:text-2xl  text-gray-700">Agrega a favoritos</h3>
                                <p className="text-lg font-normal text-gray-700">En cada búsqueda guarda todo el contenido que te guste para nunca perderte lo que quieras ver luego.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        
        <Footer />
        </>
    )
}

export default Main
