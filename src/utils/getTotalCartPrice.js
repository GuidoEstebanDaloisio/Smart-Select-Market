export const getTotalCartPrice = cart => {
    [
        {title:"algo", price: 20},
        {title:"another", price: 40}
    ]
    const totalPrice = cart.reduce((accum, curr) => accum + curr.price, 0);
    return totalPrice.toFixed(2); //toFxied ayuda a que solo muestre 2 decimales en este caso
}