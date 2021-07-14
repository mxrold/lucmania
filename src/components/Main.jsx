import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import Footer from './Footer'
import Button from './global/Button'
import NumberRandom from '../utils/NumberRandom'
import MetaHead from './global/MetaHead'

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
                id: 1,
                link: '4fa6952a-2130-4fc7-8985-e91f2a06138d'
            },
            {
                id: 2,
                link: '501d6ff8-a23c-4d91-9b77-30cb8767f7ae'
            },
            {
                id: 3,
                link: '11a62b33-bb5a-446b-ba2a-cd866e59026f'
            },
            {
                id: 4,
                link: '2ceed898-bb6a-4f56-b22e-31d6b94a208f'
            },
            {
                id: 5,
                link: '41b2d174-1639-49b0-9bea-de40f0c6e28f'
            },
            {
                id: 6,
                link: '9ccb0235-5e5d-4d96-acda-8309f3d8131e'
            },
            {
                id: 7,
                link: '13b569d7-121b-42a1-9d7a-724c9a6c1b82'
            },
            {
                id: 8,
                link: 'bafecc28-7831-407e-a4fc-9d595a0c02ca'
            },
            {
                id: 9,
                link: '2747fcde-3bc5-4346-8eaa-136ce5582a98'
            },
            {
                id: 10,
                link: 'be4ff2cf-a77c-4cf8-8a73-06102335a853'
            },
            {
                id: 11,
                link: '381548e2-b703-4086-9e8a-dd379e57974e'
            },
            {
                id: 12,
                link: 'f0ecd2e5-b334-4693-b530-302ac4d0fee1'
            },
            {
                id: 13,
                link: '538fc4c5-24eb-4e1f-b3a0-8bfb39e6e581'
            },
            {
                id: 14,
                link: '6f01d2de-2b1a-4702-97b6-fb89a15cdce8'
            },
            {
                id: 15,
                link: '862ce2cd-18b5-4e2d-894b-3cc714e9f300'
            },
            {
                id: 16,
                link: '918b91fc-9f08-4543-8821-712380640b97'
            },
            {
                id: 17,
                link: 'b618e45b-f8f8-4cef-9b75-8d87188c1de4'
            },
            {
                id: 18,
                link: '9bd385d4-c060-4909-b434-447f53c69f6e'
            },
            {
                id: 19,
                link: '6b3894f9-dbc8-43ef-8ca2-07e96b047cb9'
            },
            {
                id: 20,
                link: 'b34c3a39-7a1b-4a0c-a4e1-a23f841a778a'
            }
        ]

        const getRandom = NumberRandom(1, images.length)

        const FIRST_URL = 'https://firebasestorage.googleapis.com/v0/b/lucmania-7f96a.appspot.com/o/'
        const SECOND_URL = `lucmania%2Fimage-main-${images[getRandom].id}.png?alt=media&token=${images[getRandom].link}`
        setImage(FIRST_URL + SECOND_URL)
    }

    return (
        <>
        <MetaHead 
            title="Home"
            description="Descubre películas y series sin buscar por ti mismo."
            url="https://lucmania.co"
        />

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
                                <p className="text-lg font-normal sm:text-xl text-gray-700">¿Te gustó algo y quieres conocer más? Ingresa a cada película o serie para ver su información, puntuaciones de usuarios, resumen, elenco principal y mucho más.</p>
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
                <div>
                    <span className="block w-24 h-0.5 mx-auto mb-3 bg-blue-400"></span>
                    <h3 className="text-xl font-medium sm:text-2xl  text-gray-800">Ayudame a seguir mejorando la plataforma</h3>
                    <div className="flex flex-col justify-center items-center sm:flex-row mt-6">
                        <p className="max-w-xs mb-4 sm:mr-4 sm:mb-0 text-lg font-normal text-gray-700">Puedes apoyarme donandome un Cafecito mediante el siguiente enlace</p>
                        <a href='https://cafecito.app/mxrold' rel='noopener' target='_blank'>
                            <img srcset='https://cdn.cafecito.app/imgs/buttons/button_6.png 1x, https://cdn.cafecito.app/imgs/buttons/button_6_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_6_3.75x.png 3.75x' src='https://cdn.cafecito.app/imgs/buttons/button_6.png' alt='Invitame un café en cafecito.app' />
                        </a>
                    </div>
                </div>
            </div>
        </main>
        
        <Footer />
        </>
    )
}

export default Main
