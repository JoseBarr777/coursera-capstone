import { NavLink, Link } from "react-router";
import '@styles/Nav.css';
import Logo from '@assets/Logo.svg';

// the top-level navigation of the website, sometimes referred to as the navbar
const Nav = () => {
    return(
        <nav className="main-nav">
            <div className="nav-logo">
                <Link to="/">
                    <img src={Logo} alt="Logo" className="logo" />
                </Link>
            </div>
            <ul className="nav-links">
                <li>
                    <NavLink to="/" end>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/menu">Menu</NavLink>
                </li>
                <li>
                    <NavLink to="/reservations">Reservations</NavLink>
                </li>
                <li>
                    <NavLink to="/order">Order online</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;