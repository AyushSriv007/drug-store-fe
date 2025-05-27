import { Routes, Route } from 'react-router-dom';
import About from './components/about/About';
import Login from './components/auth/login/Login';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import Contact from './components/contact/Contact';
import Error from './components/error/Error';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Shop from './components/shop/Shop';

function App() {
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
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
