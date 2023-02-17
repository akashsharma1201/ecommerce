import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllProduct from './pages/AllProduct';
import Men from './pages/Men';
import Women from './pages/Women';
import Electronics from './pages/Electronics';
import Footer from './components/Footer';
import { ProductDetail } from './pages/ProductDetail';
import Cart from './pages/Cart';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="layout container-fluid">
        <div className='row '>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/allproducts' element={<AllProduct />} />
            <Route path='/men' element={<Men />} />
            <Route path='/women' element={<Women />} />
            <Route path='/electronics' element={<Electronics />} />
            {/* <Route path='/productdetail' element={<ProductDetail />} /> */}
            <Route path='/cart' element= {<Cart />} />
            <Route path='/product/:id' element={<ProductDetail />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
