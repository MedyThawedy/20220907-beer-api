import Home from './components/home/Home.jsx';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AllProducts from './components/products/allproducts/AllProducts.jsx';
import SingleProduct from './components/products/singleproduct/SingleProduct.jsx';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/allproducts' element={<AllProducts />} />
          <Route path='/allproducts/:productid' element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;