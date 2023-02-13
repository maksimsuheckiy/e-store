export const calculateDiscount = (price, discount) => {
    return price - Math.round((price * discount) / 100)
}