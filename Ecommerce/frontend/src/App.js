
import './App.css';
import { NavBar } from './Components/NavBar/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCatagory from './Pages/ShopCatagory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'




function App() {
  return (
    <div >
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element ={<Shop/>}/>
        <Route path='/mens' element ={<ShopCatagory banner={men_banner} category="mens"/>}/>
        <Route path='/womens' element ={<ShopCatagory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element ={<ShopCatagory banner={kids_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId'element={<Product/>}/>
        </Route>
        <Route path='/cart' element ={<Cart/>}/>
        <Route path='/login' element ={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
