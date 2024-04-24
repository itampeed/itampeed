import React, { useEffect, useState } from 'react';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../Sources/Logo.png';

const Navbar = () => {
  const location = useLocation();
  const [bgColor, setBgColor] = useState('var(--main-black)');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (location.pathname === '/') {
      setBgColor('transparent');
    } else {
      setBgColor('var(--main-black)');
    }
  }, [location.pathname]);

  return (
    <div className='header-main' style={{ backgroundColor: bgColor }}>
      <div className='logo'>
        <img src={logo} alt='itampeed Logo' />
      </div>
      <div className={`${isMenuOpen ? "nav1" : 'nav'} ${isMenuOpen ? 'opened' : ''}`}>
        <ul className='nav-menu'>
          <li><Link to='/' className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to='/about' className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
          <li><Link to='/youtube' className={location.pathname === '/youtube' ? 'active' : ''}>Youtube</Link></li>
          <li><Link to='/projects' className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
        </ul>
        <Link to='/contact'><button className='nav-button'>Contact</button></Link>
      </div>
      <div className='hamburger-menu'>
          <button className={`menu ${isMenuOpen ? 'opened' : ''}`} onClick={handleMenuToggle} aria-label="Main Menu">
            <svg width="40" height="40" viewBox="0 0 100 100">
              <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
              <path className="line line2" d="M 20,50 H 80" />
              <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
            </svg>
          </button>
        </div>
    </div>
  );
};

export default Navbar;
