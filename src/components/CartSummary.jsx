import { useContext } from 'react'
import { productsContext } from '../context/ProductsContext'
import { MdShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { getTotalCartPrice } from '../utils/getTotalCartPrice'

function CartSummary() {
    const { cart } = useContext(productsContext);
    return cart?.length ? (
        <>
            <Link to="/cart">
                <MdShoppingCart size={30} color='darkgrey' />
            </Link>
            <span>${getTotalCartPrice(cart)} </span>
        </>

    ) : (
        <p>Empty cart</p>
    );
}

export default CartSummary