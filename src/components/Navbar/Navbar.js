import React, { useEffect, useState } from 'react';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../Sources/Logo.png'

const Navbar = () => {
  const location = useLocation();
  const [bgColor, setBgColor] = useState('var(--main-black)');

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
        <img src={logo} alt='itampeed Logo'/>
      </div>
      <div className='nav'>
        <ul className='nav-menu'>
          <li><Link to='/' className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to='/about' className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
          <li><Link to='/youtube' className={location.pathname === '/youtube' ? 'active' : ''}>Youtube</Link></li>
          <li><Link to='/projects' className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
        </ul>
        <Link to='/contact'><button className='nav-button'>Contact</button></Link>
      </div>
    </div>
  );
}

export default Navbar;
