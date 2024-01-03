import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/footer/footer';
import homeo from './components/assests/banner_homeo.png';
import health from './components/assests/banner_health.png';
import personal from './components/assests/banner_personal.png';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>

        
        <Route path='/homeo' element={<ShopCategory banner={homeo} category="homeo"/>}/>
        <Route path='/health' element={<ShopCategory banner={health} category="health"/>}/>
        <Route path='/personal' element={<ShopCategory banner={personal} category="personal"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
