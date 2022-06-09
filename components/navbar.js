import React from "react";
import logo from '../images/Star_Wars_logo.svg'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='logo-container'>
          <img src={logo} alt='' className='logo' />
        </div>
        <div className='nav-buttons'>
          <a className='nav-btn' href=''>
            Home
          </a>
          <a className='nav-btn' href=''>
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
