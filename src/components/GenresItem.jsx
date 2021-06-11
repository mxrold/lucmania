import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const GenresItem = ({ item }) => {
    const [ isPresset, setIsPresset ] = useState(false)

    const handleChangeColor = (id, name) => {
        setIsPresset(!isPresset)
    }

    return (
        <button
            onClick={() => handleChangeColor(item.id, item.name)}
            className={`h-14 border-4 text-lg font-medium ${isPresset ? 'bg-yellow-300' : 'bg-transparent'} text-gray-800 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-sm`}
        >
            {item.name}    
        </button>
    ) 
}

export default GenresItem
