import React from 'react';
import { Link } from 'react-router';
import MainNav from './mainNav';

class MyHeader extends React.Component {
    render() {
        return (
            <div className="header-container">
                <Link to="/">
                    <img src="images/talogo.png" alt="Techaspect logo" title="logo img"/>
                </Link>
                <MainNav />
            </div>
        );
    }
}

export default MyHeader;
