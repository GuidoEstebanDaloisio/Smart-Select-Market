import React, { useContext } from 'react'
import { productsContext } from '../context/ProductsContext';
import Navbar from '../components/Navbar'
import Product from '../components/Product';
import "../styles/Products.css"
import Sort from '../components/Sort';
import FilterByPrice from '../components/FilterByPrice';
import Search from '../components/Search';
import CartSummary from '../components/CartSummary';
import Header from '../components/Header';
function Products() {
    const { products, isLoading, error, maxPrice, query, cart } = useContext(productsContext);

    return (
        <div>
            <Header/>
                
                    <FilterByPrice />

            <h2>Listado de Productos</h2>
            <main className='container'>
                {products
                    .filter((prod) =>
                        prod.price <= maxPrice &&
                        prod.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())) // los toLocaleLowerCase() son para que busque la palabra sin diferenciar si si tiene mayusculas o minusculas
                    .map((prod) => (
                        <Product prod={prod} />
                    ))}
            </main>
        </div>
    )
}

export default Products;