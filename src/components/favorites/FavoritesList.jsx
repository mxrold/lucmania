import FavoritesItem from './FavoritesItem'
import Titleh3 from '../global/Titleh3'

const FavoritesList = ({ list, category, showModal, setShowModal }) => {
    return (
        <>
            {
                list.length === 0 
                ? null
                : <>
                    <div className="flex justify-between items-center mt-4">
                        <Titleh3 title={category} />
                    </div>
                    <div className="scroll-x">
                    {           
                        list.map(item => 
                            <FavoritesItem item={item} key={item.id} path={item.path} showModal={showModal} setShowModal={setShowModal} />
                        )                           
                    }
                    </div>
                </>
            }
        </>
    )
}

export default FavoritesList
