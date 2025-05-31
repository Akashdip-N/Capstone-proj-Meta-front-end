import React from 'react';
import '../CSS_properties/Nav.css';
import logo from '../icons_assets/Logo.svg';

function Nav() {
    return (
        <div className="nav-container">
            <nav>
                <img src={logo} className="logo" alt="Logo" />
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#reservations">Reservations</a></li>
                    <li><a href="#order-online">Order Online</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
