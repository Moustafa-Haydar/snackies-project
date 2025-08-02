import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        {/* Protected Routes */}


      </Routes>
    </Router>
  );
}

export default App;
