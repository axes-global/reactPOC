import React from 'react';

class ForgetPassword extends React.Component {
    render() {
        return (
            <div className="forget-container">
                <h1>Retrive your password</h1>
                <p>Just enter your valid email and we will send you a new passowrd.</p>
                <form className="forget-form">
                    <div className="credentials-wrapper">
                        <label>Enter your Email<span className="required">*</span></label>
                        <span>
                            <i className="fa fa-envelope"></i>
                            <input type="email" placeholder="E-mail Address" name="email" required/>
                        </span>
                    </div>
                    <div className="msg-resetpass">Your new password has been successfully sent to your registered email id !!</div>
                    <div className="msg-resetpass-error">Email id is incorrect !!</div>
                    <input type="submit" value="Email new password" className="password-button"/>
                </form>
            </div>
        )
    }
}

export default ForgetPassword;
