import Titleh2 from '../global/Titleh2'
import TextParagraph from '../global/TextParagraph'

const GenresInformationText = ({ category }) => {
    return (
        <div className="w-full mx-auto mb-4">
            <Titleh2 title={`Géneros de ${category}`} />
            <TextParagraph text={'Si no eliges ningún género, la búsqueda se hará por todas las categorías.'} />
        </div>
    )
}

export default GenresInformationText
