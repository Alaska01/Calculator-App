
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar">
    <h1>Math Magicians</h1>
    <ul className="navbar-menu">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/App">Calculator</Link></li>
      <li><Link to="/Quotes">Quotes</Link></li>
    </ul>
  </nav>
);

export default NavBar;
