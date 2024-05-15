import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productsContext } from '../context/ProductsContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../styles/Button.css"

function ProductDetails() {
  const { idProduct } = useParams();
  const { products } = useContext(productsContext);
  const navigate = useNavigate(); 


  // Función para obtener un producto por su ID
  const getProductById = (id) => {
    console.log('Buscando producto con ID:', id);
    console.log('Lista de productos:', products);
    return products.find((product) => product.id === parseInt(id, 10));
  };

  const product = getProductById(idProduct);

  if (!product) {
    return <div>Producto N°{idProduct} no encontrado</div>;
  }

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <>
      <Header />
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} style={{ width: "20%" }} />
      <h3>{product.description}</h3>
      <h3>Price: {product.price}</h3>
      <h3>Category: {product.category}</h3>

      <button className="volver-button" onClick={handleBack}>
        Back
      </button>
      <Footer />
    </>
  );
}

export default ProductDetails;
