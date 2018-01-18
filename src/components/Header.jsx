import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>WEWORK</h1>
      <Link to='/'>Home</Link> | <Link to='/AboutUs'>About Us</Link> | <Link to='/Contact'>Contact</Link>

    </div>
  );
}

export default Header;
