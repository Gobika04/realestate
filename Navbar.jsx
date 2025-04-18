// Navbar.jsx - placeholderimport { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo">My Real Estate</h2>
      </div>

      <div className="navbar-center">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>

      <div className="navbar-right">
        <Link to="/owner-login" className="nav-button">Owner Login</Link>
        <Link to="/customer-login" className="nav-button">Customer Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
