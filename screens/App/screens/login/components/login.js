import React from 'react';
import LoginMenu from './LoginMenu.js';

class LoginPanel extends React.Component {
    render() {
        return (
            <div className="login-container">
                <h1>Welcome Techaspectians</h1>
                <h3>Identify yourself before continue</h3>
                 <form>
                    <div className="credentials-wrapper">
                        <label>Username</label>
                        <input type="text" name="Username" placeholder="Username"/>
                    </div>
                    <div className="credentials-wrapper">
                        <label>Password</label>
                        <input type="password" name="password"/>
                    </div>	
                    <input type="button" value="Submit" className="submit-button"/>
                </form> 
                <LoginMenu />
            </div>
        )
    }
}

export default LoginPanel;