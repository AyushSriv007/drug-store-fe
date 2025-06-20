import { Routes, Route, useLocation } from 'react-router-dom';
import About from './components/about/About';
// import Login from './components/auth/login/Login';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import Contact from './components/contact/Contact';
import Error from './components/error/Error';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
//import Shop from './components/shop/Shop';
import { useEffect } from 'react';
import Login from './pages/LoginPage';
import Shop from './features/products/shop/Shop';
import Login2 from './pages/login/Login';
import ProductDetails from './features/products/shop/product-details/ProductDetails';
import ProductDetails2 from './components/shop/product-details/ProductDetails';

function App() {
  // const location = useLocation();

  // useEffect(() => {
  //   window.__themeInitialized = false;

  //   setTimeout(() => {
  //     if (typeof window.initializeThemeScripts === 'function') {
  //       window.initializeThemeScripts();
  //     }
  //   }, 0);
  // }, [location.pathname]);

  // useEffect(() => {
  //   window.initializeThemeScripts();
  // }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/product-details" element={<ProductDetails2 />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
