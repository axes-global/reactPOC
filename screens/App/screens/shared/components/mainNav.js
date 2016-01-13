import React from 'react';
import { Link } from 'react-router';

class MainNav extends React.Component {
    render() {
        return (
            <nav className="main-nav">
                <Link to="/">Home</Link>
                <Link to="/list">List</Link>
                <Link to="/login">Login</Link>
                <Link to="/postad">PostAd</Link>
            </nav>
        );
    }
}

export default MainNav;
