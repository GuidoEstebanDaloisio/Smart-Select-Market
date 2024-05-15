import {useContext} from 'react'
import { productsContext } from '../context/ProductsContext'
import { getDerivedCart } from '../utils/getDerivedCart';
import { Link } from 'react-router-dom';

function Cart() {
    const {cart, removeFromCart} = useContext(productsContext);
    const derivedCart = getDerivedCart(cart);
  return (
    <article>
        {derivedCart.map((item) => (
            // de esta forma al hacer click sobre el producto este se eliminara del carrito
            <p onClick={() => removeFromCart(item.id)}>
                {item.name} - {item.quantity} - {item.totalPrice} 
            </p>
        ))}

        {/* Vuelve una una pantalla hacia atras */}
        <Link to={-1} >Back</Link> 

    </article>
  )
}

export default Cart