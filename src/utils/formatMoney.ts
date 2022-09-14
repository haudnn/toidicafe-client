const formatMonney = (money: Number ) => {
    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
export default formatMonney