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
//context
import { useThemeContext } from './context/ThemeContext';

function App() {
  const { isDark } = useThemeContext()
  return (
    <div className={ isDark ? "App dark" : "App"}>
      <Toaster />
      <header>
        <Header />
        <NavBar />
      </header>
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:category/:productSlug" element={<ProductItem />} />
          <Route path="/product/:category" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      
      
      <Footer />
    </div>
  );
}

export default App;
