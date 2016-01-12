import React from 'react';
import LoginMenu from './LoginMenu.js';

class LoginPanel extends React.Component {
    render() {
        return (
            <div id="login-panel" align="center">
                <div className="login-container">
                    <h1>Welcome Techaspectians</h1>
                    <h3>Identify yourself before continue</h3>
                     <form className="login-form">
                        <div className="credentials-wrapper">
                            <label>Username</label>
                            <span>
                                <i className="fa fa-user"></i>
                                <input type="text" name="Username" placeholder="Username" required/>
                            </span>
                        </div>
                        <div className="credentials-wrapper">
                            <label>Password</label>
                            <span>
                                <i className="fa fa-key"></i>
                                <input type="password" name="password" placeholder="Password" required/>
                            </span>
                        </div>
                        <input type="submit" value="Submit" className="submit-button"/>
                    </form>
                    <LoginMenu />
                </div>
            </div>
        )
    }
}

export default LoginPanel;
