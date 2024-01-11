import { ItemType } from '../types/ItemType'

export default function Item({url, MainImage, title, currency_code, price, quantity}: ItemType) {     
    if (title.length >= 50) {
        title = title.slice(0, 49) + '...';
    } 
        
    if (currency_code === 'USD') {
        price = '$' + price;
    } else if (currency_code === 'EUR') {
        price = '€' + price;
    } else {
        price = price + ' ' + currency_code;
    }

    let quantityLevel : string;

    if (quantity < 10) {
        quantityLevel = 'low';
    } else if (quantity > 20) {
        quantityLevel = 'high';
    } else {
        quantityLevel = 'medium';
    }

    return (
        <div className="item">
            <div className="item-image">
                <a href={url}>
                    <img src={MainImage.url_570xN}></img>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{title}</p>
                <p className="item-price">{price}</p>
                <p className={`item-quantity level-${quantityLevel}`}>{quantity} left</p>
            </div>
        </div>
    )
}