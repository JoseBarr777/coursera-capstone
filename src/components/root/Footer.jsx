import { Link } from 'react-router';
import '@styles/Footer.css';
import Logo from '@assets/Logo .svg';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={Logo} alt="Little Lemon" />
                </div>
                <div className="footer-nav">
                    <h3>Doormat Navigation</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/reservations">Reservations</Link></li>
                        <li><Link to="/order-online">Order Online</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>Contact</h3>
                    <address>
                        <p>123 Restaurant St.</p>
                        <p>Chicago, IL 60601</p>
                        <p>555-123-4567</p>
                        <p><a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
                    </address>
                </div>
                <div className="footer-social">
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;