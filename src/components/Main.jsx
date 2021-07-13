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
        <main className="flex justify-center items-center h-full min-h-screen sm:p-3 bg-yellow-200">
            <div className="flex flex-col items-center lg:flex-row md:justify-between lg:justify-around w-11/12 md:w-5/6 max-w-screen-2xl">
                <div className="relative top-2 right-2 w-11/12 lg:w-5/12 h-max my-12 lg:my-4 bg-gray-700 rounded">
                    <div className="relative bottom-2 left-2 p-3 sm:p-4 md:w-full md:text-left bg-gray-300 border-2 border-gray-700 rounded">
                        <h1 className="text-4xl font-bold sm:text-6xl text-gray-900">Lorem ipsum dolor sit amet</h1>
                        <h3 className="mb-6 text-lg font-normal sm:text-2xl  text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h3>
                        <div className="flex flex-col sm:flex-row sm:justify-around sm:mb-0 w-full ">
                            {
                                dataButton.map(data => 
                                    <Button 
                                        text={data.title} 
                                        key={data.key} 
                                        onClick={() => handleGetGenders(data.key)}
                                        width={'w-full sm:w-5/12'}
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
                <figure className="lg:w-5/12">
                    {
                        image === ''
                        ? <p className="text-center">...Cargando imagen de fondo</p>
                        : <img className="w-64 sm:w-78 md:w-96 lg:w-full mx-auto" src={image} alt="Imagen de storyset.com" title="Imagen de storyset.com" />
                    }
                </figure>
            </div>
        </main>
        
        <Footer />
        </>
    )
}

export default Main
