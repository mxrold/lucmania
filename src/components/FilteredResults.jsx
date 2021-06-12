import { useState, useEffect } from 'react'

const FilteredResults = () => {
    const [ path, setPath ] = useState([])

    useEffect(() => {
        const idGenre = sessionStorage.getItem('Id')
        const nameGenre = sessionStorage.getItem('Name')
        setPath([idGenre, nameGenre])
    }, [])

    return (
        <div>
            Filtered results
        </div>
    )
}

export default FilteredResults
