export const calcNewPrice = (price, discount) => {
    return price - Math.round((price * discount) / 100)
}