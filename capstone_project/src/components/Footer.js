import '../CSS_properties/Footer.css';
import logo from '../icons_assets/Logo.svg';
import {faFacebook, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
        <>
            <nav className="footer">
                <div className="footer-content">
                    <img src={logo} alt="Little Lemon Logo" className="footer-logo" />
                    
                    <div className="footer-links">
                        <h4>Navigation</h4>
                        
                        <ul className="footer-nav-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#menu">Menu</a></li>
                            <li><a href="#reservations">Reservations</a></li>
                            <li><a href="#order-online">Order Online</a></li>
                            <li><a href="#login">Login</a></li>
                        </ul>
                    </div>
                    
                    <div class="contact-info">
                        <h4>Contact</h4>
                        <div className="contact-details">
                            <p>123 Little Lemon St.</p>
                            <p>Chicago, IL 60601</p>
                            <p>Email: xyz@gmail.com</p>
                            <p>Phone: (123) 456-7890</p>
                        </div>
                    </div>

                    <div className="social-media">
                        <h4>Social-media Links</h4>
                        <ul className="social-icons">
                            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></li>
                            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Footer;