type MainImageType = {
    url_570xN: string,
}

export type ItemType = {
    listing_id: number,
    url: string,
    MainImage: MainImageType,
    title: string,
    currency_code: string,
    price: string,
    quantity: number,
}
