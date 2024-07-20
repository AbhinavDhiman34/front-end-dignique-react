import React, { useState } from 'react';
import './Navbar.css';
import logo from '../asset/logo.png';
import cart_icon from '../asset/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  const handleClick = (item) => {
    setMenu(item);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Shopeholic</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => handleClick("shop")} className={menu === "shop" ? "active" : ""}><Link style={{textDecoration:'none'}} to='/'>Shop</Link></li>
        <li onClick={() => handleClick("mens")} className={menu === "mens" ? "active" : ""}><Link style={{textDecoration:'none'}}to='/'>Men</Link></li>
        <li onClick={() => handleClick("womens")} className={menu === "womens" ? "active" : ""}><Link style={{textDecoration:'none'}}to='/'>Women</Link></li>
        <li onClick={() => handleClick("kids")} className={menu === "kids" ? "active" : ""}><Link style={{textDecoration:'none'}} to='/'>Kids</Link></li>
      </ul>
      <div className="nav-login-cart">
        <Link to ='/login'><button>Login</button></Link>
        <Link to ='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
