function getShippingMessage(country, price, deliveryFee) {
    return `Shipping to ${country} will cost ${price > 0 ? price + deliveryFee : 'Error'} credits`;
}
