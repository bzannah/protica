import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue-grey darken-2">
            <div className="container">
                <Link to='/' className="brand-logo logo">ProTica</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

export default Navbar;