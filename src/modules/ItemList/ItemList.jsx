import { Item } from '../Item/Item.jsx';
import './ItemList.css'

export const ItemList = ({item}) => {
    return (
        <>
        <div className='item-custom-flex'>
            {item.map(item =>
                <Item item={item}/>
            )}
        </div>
        </>
    )
}
