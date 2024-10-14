import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/pages/Home';
import Products from './Components/pages/Products';
import Services from './Components/pages/Services';
import SignUp from './Components/pages/Signup';
import Footer from './Components/Footer';
import ProductPage from './ProductPage';
import Destination from './Components/Destination';
import Navbar1 from './Components/Navbar1';
import About from './Components/pages/About';
import Service from './Components/pages/Service';
import Contact from './Components/pages/Contact';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <>
      <BrowserRouter>
         <Navbar1 /> 
         <ScrollToTop />
         <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
        
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
