import { useState } from 'react'

const GenresItem = ({ item }) => {
    const [ isPresset, setIsPresset ] = useState(false)

    const handleChangeColor = (id, name) => {
        setIsPresset(!isPresset)

        if(isPresset) {
            sessionStorage.removeItem('Name')
            sessionStorage.removeItem('Id')
        } else {
            sessionStorage.setItem('Id', id)
            sessionStorage.setItem('Name', name)
        }
    }

    return (
        <button
            onClick={() => handleChangeColor(item.id, item.name)}
            className={`h-16 sm:h-14 text-base md:text-lg font-medium ${isPresset ? 'bg-yellow-300' : 'bg-transparent'} text-gray-800 border-4 border-yellow-300 rounded-sm focus:outline-none focus:ring-4 focus:ring-gray-600`}
        >
            {item.name}    
        </button>
    ) 
}

export default GenresItem
