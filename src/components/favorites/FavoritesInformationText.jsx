import Titleh2 from '../global/Titleh2'
import TextParagraph from '../global/TextParagraph'

const FavoritesInformationText = ({ lengthMovie, lengthTv, limit }) => {
    return (
        <div className="flex justify-between items-center border-b-2 border-gray-200">
            <Titleh2 title={'Favoritos'} />
            <TextParagraph text={`${lengthMovie + lengthTv} / ${limit}`} />
        </div>
    )
}

export default FavoritesInformationText
