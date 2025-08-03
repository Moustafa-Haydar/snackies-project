import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './Pages/ProductPage/ProductPage';
import LandingPage from './Pages/LandingPage/LandingPage';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Shop from './Pages/ShopPage/Shop';
import Profile from './Pages/Profile/Profile';

import './styles/index.css';
import './styles/style.css';
import './styles/variables.css';
import UserCart from './Pages/UserCart/UserCart';
import Checkout from './Pages/Checkout/Checkout';

function App() {
  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />

        <Route path="/product" 
            element={<ProductPage productName={"Snack Mix"} productRating={"5"} productPrice={"2.99$"} productDetails={"lorem ipsum dolorem lorem ipsum dolorem lorem ipsum dolorem lorem ipsum dolorem lorem ipsum dolorem"}/>} />
        <Route path="/cart" element={<UserCart />} />
        <Route path="/checkout" element={<Checkout />} />

          <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />}/>
        <Route path="/profile" element={<Profile />} />
        

        {/* Protected Routes */}


      </Routes>
    </Router>
  );
}

export default App;
