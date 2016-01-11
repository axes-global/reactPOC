import React from 'react';

class ForgetPassword extends React.Component {
    render() {
        return (
            <div className="forget-container">
                <p>Just enter your valid email and we will send you a new passowrd.</p>
                <form>
                    <div className="credentials-wrapper">
                        <label>Enter your Email</label>
                        <input type="name" placeholder="Email"/>
                    </div>
                    <input type="button" value="Email new password" className="password-button"/>
                </form>
            </div>
        )
    }
}

export default ForgetPassword;
