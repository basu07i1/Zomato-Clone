import React from 'react';
import { Link } from 'react-router-dom';
import zomatoLogo from '../assets/zomato.png';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <Link to="/">
                    <img src={zomatoLogo} alt="Zomato" className="logo-img" />
                </Link>
            </div>

            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>


        </div>
    );
};

export default Header;