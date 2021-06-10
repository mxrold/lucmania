import Button from './global/Button'
import ImageMain from '../assets/static/main-image.svg'

const Main = () => {

    const dataButton = [
        {
            title: 'Películas',
            key: 'peliculas-btn'
        },
        {
            title: 'Series',
            key: 'series-btn'
        }
    ]

    return (
        <main className="h-5/6 p-3 bg-yellow-400 flex flex-col justify-center md:flex-row md:items-center  md:px-10">
            <div className="text-center md:w-3/5 md:text-left">
                <h1 className="text-4xl font-bold sm:text-6xl text-gray-900">Lorem ipsum dolor sit amet</h1>
                <h3 className="mb-6 text-lg font-normal sm:text-2xl  text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h3>
                <div className="mb-6 w-full flex justify-between">
                    {
                        dataButton.map(btn => 
                            <Button text={btn.title} key={btn.key} />
                        )
                    }
                </div>
            </div>
            <figure className=" md:w-2/4">
                <img className="w-64 mx-auto md:w-96" src={ImageMain} alt=""/>
            </figure>
        </main>
    )
}

export default Main
