import { useContext } from 'react'
import { productsContext } from '../context/ProductsContext'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Product from '../components/Product';

export default function Home() {
  const { products, isLoading, error, maxPrice, query, cart } = useContext(productsContext);
  

  // Función para obtener una lista aleatoria de productos
  const getRandomProducts = (array, numProducts) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numProducts);
  };

  // Filtrar y obtener solo 8 productos aleatorios
  const randomProducts = getRandomProducts(products, 8);

  return (
    <>
      <Header />
      <h1>Bienvenido a Smart Select Market</h1>
      <h2>Explora nuestra selección de productos destacados</h2>
      <main className='container'>
        {randomProducts.map((prod) => (
          <Product prod={prod} key={prod.id} />
        ))}
      </main>

      <Footer />
    </>
  )
}
