// @flow
import React from 'react';
import { Link } from 'react-router';

const Navbar = ({}: {}) => (
    <header>
        <Link to='/' className="logo">
            Qasper
        </Link>
        <div className="login">
            login
        </div>
    </header>
);

export default Navbar
