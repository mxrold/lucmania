import GenresItem from './GenresItem'

const GenresList = ({ genres }) => {
    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full mx-auto sm:grid-cols-3 sm:grid-rows-3 lg:grid-cols-4 lg:grid-rows-4">
            {
                genres.map(item => 
                    <GenresItem item={item} key={item.id} />
                )
            }
        </div>
    )
}

export default GenresList
