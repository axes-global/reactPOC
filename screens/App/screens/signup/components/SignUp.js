import React from 'react';
import { store } from '../../controller/signUpController';
class SignUp extends React.Component {
    render() {
        return (
        	<div className="signup-container">
            <h1>Create Your Account</h1>
            <form className="signup-form" onSubmit = {store} >
            	<div className="credentials-wrapper">
	            	<label>Username<span className="required">*</span></label>
	                <span>
					  <i className="fa fa-user"></i>
					  <input type="text" name="Username" placeholder="Username" required/>
					</span>
	            </div>    
	            <div className="credentials-wrapper">
	            	<label>E-mail Address<span className="required">*</span></label>
	                <span>
 						<i className="fa fa-envelope"></i>
  						<input type="email" placeholder="E-mail Address" name="email" required/>
  					</span>
	            </div>
	            <div className="credentials-wrapper">
	            	<label>Password<span className="required">*</span></label>
	                <span>
						<i className="fa fa-key"></i>
						<input type="password" name="password" placeholder="Password" required/>
					</span>
	            </div> 
	            <div className="msg-subscribe">You have been successfully subscribed !!</div>
	            <input type="submit" value="Sign Up" className="signup-button" />
            </form>
            </div>
        )
    }
}

export default SignUp;