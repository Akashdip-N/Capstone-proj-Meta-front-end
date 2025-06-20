import React, { useState } from 'react';
import '../CSS_properties/Nav.css';
import logo from '../icons_assets/Logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="nav-bar">
        <img src={logo} alt="Logo" className="logo" />

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><a href="#Header" className="active" onClick={closeMenu}>Home</a></li>
            <li><a href="#Header" onClick={closeMenu}>About</a></li>
            <li><a href="#menu" onClick={closeMenu}>Menu</a></li>
            <li><a href="#BookingPage" onClick={closeMenu}>Reservations</a></li>
            <li><a href="#menu" onClick={closeMenu}>Order Online</a></li>
            <li><a href="#login" onClick={closeMenu}>Login</a></li>
        </ul>
        </nav>
    );
}

export default Nav;
