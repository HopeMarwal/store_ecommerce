import './App.css';
//components
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
//routes
import Home from './pages/Home';
import ProductItem from './pages/ProductItem';
import Category from './pages/Category';
//react router
import {Routes, Route} from 'react-router-dom';
import Cart from './pages/Cart';
//toaster
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="App">
      <Toaster />
      <header>
        <Header />
        <NavBar />
      </header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:category/:productSlug" element={<ProductItem />} />
        <Route path="/product/:category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
