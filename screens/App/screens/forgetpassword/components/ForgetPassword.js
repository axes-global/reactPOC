import React from 'react';

class ForgetPassword extends React.Component {
    render() {
        return (
            <div className="forget-container">
                <p>Just enter your valid email and we will send you a new passowrd.</p>
                <form className="forget-form">
                    <div className="credentials-wrapper">
                        <label>Enter your Email</label>
                        <span>
                            <i className="fa fa-envelope"></i>
                            <input type="email" placeholder="E-mail Address" name="email"/>
                        </span>
                    </div>
                    <input type="button" value="Email new password" className="password-button"/>
                </form>
            </div>
        )
    }
}

export default ForgetPassword;
