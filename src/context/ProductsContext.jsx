import React, { useState, useEffect, createContext } from "react";
import { getAllProducts, getCart } from "../services/productService";
import { initialProduct } from "../services/initialProduct";
export const productsContext = createContext([initialProduct]);

export const ProductsContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const[sortedMaxToMin, setSortedMaxToMin] = useState(false);
    const[maxPrice, setMaxprice] = useState(1000);
    const [query, setQuery] = useState(""); //Buscador
    const [cart, setCart] = useState(getCart());
    const [user, setUser] = useState(null);

    const handleUser = (user) => setUser(user);

    const handleSort = () => {
        if (sortedMaxToMin){
            const sortedProducts = products.toSorted((a, b) => a.price - b.price);
            setProducts(sortedProducts);
        } else{
            const sortedProducts = products.toSorted((a, b) => b.price - a.price);
            setProducts(sortedProducts);
        }
        setSortedMaxToMin(!sortedMaxToMin);
    }

    const handleMaxPrice = (price) => setMaxprice(price);

    const handleQuery = (searchTerm) => setQuery(searchTerm);

    const addToCart = (prod) => {
        setCart((prevValue) => [...prevValue, prod]);
        window.localStorage.setItem("cart", JSON.stringify(cart))
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const fetchData = async () => {
        try {
            setError(null);
            setIsLoading(true);
            const data = await getAllProducts();
            setProducts(data);
        } catch (err) {
            console.error(err);
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <productsContext.Provider value={{products, isLoading, error, sortedMaxToMin, maxPrice, query, cart, user, handleSort, handleMaxPrice, handleQuery, handleUser, addToCart, removeFromCart}}>
            {children}
        </productsContext.Provider>
    )
}