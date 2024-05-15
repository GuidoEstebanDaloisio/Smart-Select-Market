import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import { ProductsContextProvider } from './context/ProductsContext'
import Cart from './components/Cart'
import ProductDetails from './pages/ProductDetails'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <BrowserRouter>

      <ProductsContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='cart' element={<Cart />} />
          <Route path='products' element={<Products />}/>
          <Route path='products/:idProduct' element={<ProductDetails />} />
          <Route path='login' element={<Login/>} />
          <Route path='register' element={<Register/>} />
          <Route path='*' element={<h1>Pagina no encontrada. ERROR 404</h1>} />


        </Routes>
      </ProductsContextProvider>

    </BrowserRouter>
  )
}

export default App
