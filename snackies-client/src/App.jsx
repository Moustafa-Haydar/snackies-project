import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Test from './Pages/Test1/Test';

import './styles/index.css';
import './styles/style.css';
import './styles/variables.css';

function App() {
  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Test a="hello" b="taha" />} />


        {/* Protected Routes */}


      </Routes>
    </Router>
  );
}

export default App;
