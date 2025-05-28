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
        <div className="nav-bg">
            <nav className="main-nav" aria-label="Main Navigation">
                <div className="nav-logo">
                    <Link to="/">
                        <img src={Logo} alt="Little Lemon logo" className="logo" />
                    </Link>
                </div>

                <button
                    className="mobile-menu-button"
                    onClick={toggleMenu}
                    aria-controls="primary-navigation"
                    aria-expanded={menuOpen}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                    <img src={HamburgerIcon} alt="Menu" className="hamburger-icon" />
                </button>

                <ul
                    id="primary-navigation"
                    className={`nav-links ${menuOpen ? 'open' : ''}`}
                    role="menubar"
                >
                    <li role="none">
                        <NavLink to="/" end role="menuitem">Home</NavLink>
                    </li>
                    <li role="none">
                        <NavLink to="/about" role="menuitem">About</NavLink>
                    </li>
                    <li role="none">
                        <NavLink to="/menu" role="menuitem">Menu</NavLink>
                    </li>
                    <li role="none">
                        <NavLink to="/reservations" role="menuitem">Reservations</NavLink>
                    </li>
                    <li role="none">
                        <NavLink to="/order-online" role="menuitem">Order online</NavLink>
                    </li>
                    <li role="none">
                        <NavLink to="/login" role="menuitem">Login</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
