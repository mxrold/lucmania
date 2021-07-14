import { useState, useEffect } from 'react'
import NumberRandom from '../../utils/NumberRandom'

const MainImage = () => {
    const [ image, setImage ] = useState('')

    useEffect(() => {
        randomImages()
    }, [])

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
        <figure className="self-center lg:w-2/3 h-full max-w-2xl mx-auto">
            {
                image === ''
                ? null
                : <img className="w-64 sm:w-78 md:w-96 mx-auto" src={image} alt="Imagen de storyset.com" title="Imagen de storyset.com" />
            }
        </figure>
    )
}

export default MainImage
