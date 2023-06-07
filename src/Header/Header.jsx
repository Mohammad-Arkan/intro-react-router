import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'
import ActiveLink from '../components/ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <ActiveLink to="/friends"> Friends</ActiveLink>
            <ActiveLink to="/posts"> Posts</ActiveLink>
            <ActiveLink to="/about"> About</ActiveLink>
            <ActiveLink to="/contact"> Contact</ActiveLink>
            
        </nav>
    );
};

export default Header;