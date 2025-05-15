import { NavLink, Link } from "react-router";
import { useState } from 'react';
import '@styles/Nav.css';
import Logo from '@assets/Logo.svg';
import HamburgerIcon from '@assets/🦆 icon _hamburger menu.svg';

// the top-level navigation of the website, sometimes referred to as the navbar
const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return(
        <nav className="main-nav">
            <div className="nav-logo">
                <Link to="/">
                    <img src={Logo} alt="Little Lemon" className="logo" />
                </Link>
            </div>
            
            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <li>
                    <NavLink to="/" end>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/menu">Menu</NavLink>
                </li>
                <li>
                    <NavLink to="/reservations">Reservations</NavLink>
                </li>
                <li>
                    <NavLink to="/order-online">Order online</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
            
            <button className="mobile-menu-button" onClick={toggleMenu}>
                <img src={HamburgerIcon} alt="Menu" className="hamburger-icon" />
            </button>
        </nav>
    );
};

export default Nav;