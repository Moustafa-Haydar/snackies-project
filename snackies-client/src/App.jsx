import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './Pages/ProductPage/ProductPage';
import LandingPage from './Pages/LandingPage/LandingPage';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';

import './styles/index.css';
import './styles/style.css';
import './styles/variables.css';

function App() {
  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        
        <Route path="/product" 
            element={<ProductPage productName={"Snack Mix"} productRating={"5"} productPrice={"2.99$"} productDetails={"lorem ipsum dolorem lorem ipsum dolorem lorem ipsum dolorem lorem ipsum dolorem lorem ipsum dolorem"}/>} />


        {/* Protected Routes */}


      </Routes>
    </Router>
  );
}

export default App;
