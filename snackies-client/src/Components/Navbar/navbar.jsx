import './style.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Reviews', path: '/#review-section' },
    { name: 'About Us', path: '/about-us' },
  ];

  return (
   <nav className="navbar-container">
      <ul className="navbar-links">
        {navLinks.map((link) => (
          <li 
            key={link.name}
          >
             <Link to={link.path} className="nav-link-item">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
