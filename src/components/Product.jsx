import React from 'react'
import { card, cardInnerContainer, buyButton, precio } from '../styles/cardStyles'
import { useContext } from 'react'
import { productsContext } from '../context/ProductsContext'
import { NavLink } from 'react-router-dom';

function Product({ prod }) {
    const { addToCart } = useContext(productsContext);
    return (
        <div key={prod.id} style={card}>
            <h3>{prod.title} </h3>
            <div style={cardInnerContainer}>
                <NavLink to={`/products/${prod.id}`}>

                    <img src={prod.image} alt={prod.title} style={{ width: "90%" }} />
                </NavLink>
                <p style={precio} >${prod.price} </p>
                <button style={buyButton} onClick={() => addToCart(prod) } >Add to Cart</button>
            </div>
            {/*//Slice lo que hace es muestra, en este caso, unicamente desde el caracter 0 hasta el 40*/}
            <p>{prod.description.slice(0, 40)}... </p>
        </div>
    )
}

export default Product