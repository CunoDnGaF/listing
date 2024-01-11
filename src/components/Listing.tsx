import { ItemType } from '../types/ItemType'
import Item from './Item'
import './Stars.css'

type Props = {
    items: ItemType[],
}

export default function Listing({items = []}: Props) {
    return (
        <div className="item-list">
            {items.map(item => <Item key={item.listing_id} {...item}/>)}
        </div>
    )
}