import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './Pages/ProductPage/ProductPage';
import LandingPage from './Pages/LandingPage/LandingPage';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';

import './styles/index.css';
import './styles/style.css';
import './styles/variables.css';

function App() {
  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<ProductPage />} />


        {/* Protected Routes */}


      </Routes>
    </Router>
  );
}

export default App;
