import '../CSS_properties/Nav.css';
import logo from '../icons_assets/Logo.svg';

function Nav() {
    return (
        <div className="nav-container">
            <nav class='nav-bar'>
                <img src={logo} className="logo" alt="Logo" />
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#Header">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#BookingPage">Reservations</a></li>
                    <li><a href="#order-online">Order Online</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
