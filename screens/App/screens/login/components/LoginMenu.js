import React from 'react';
import { Link } from 'react-router';

class LoginMenu extends React.Component {
    render() {
        return (
            <nav className="login-nav">
                <Link to="/forget">Forget Password</Link>
                <Link to="/signup">Sign up</Link>
            </nav>
        )
    }
}

export default LoginMenu;
