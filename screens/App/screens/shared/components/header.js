import React from 'react';
import MainNav from './mainNav';

class MyHeader extends React.Component {
    render() {
        return (
            <div className="header-container">
                <a className="logo-left" href="#">
                    <img src="images/talogo.png" alt="Techaspect logo" title="logo img"/>
                </a>
                <MainNav />
            </div>
        );
    }
}

export default MyHeader;