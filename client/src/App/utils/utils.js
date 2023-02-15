export const utils = (price, discount) => {
    return price - Math.round((price * discount) / 100)
}