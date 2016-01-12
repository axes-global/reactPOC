import React from 'react';

class SignUp extends React.Component {
    render() {
        return (
        	<div className="signup-container">
            <h1>Create Your Account</h1>
            <form className="signup-form">
            	<div className="credentials-wrapper">
	            	<label>Username</label>
	                <span>
					  <i className="fa fa-user"></i>
					  <input type="text" name="Username" placeholder="Username"/>
					</span>
	            </div>    
	            <div className="credentials-wrapper">
	            	<label>E-mail Address</label>
	                <span>
 						<i className="fa fa-envelope"></i>
  						<input type="email" placeholder="E-mail Address" name="email"/>
  					</span>
	            </div>
	            <div className="credentials-wrapper">
	            	<label>Password</label>
	                <span>
						<i className="fa fa-key"></i>
						<input type="password" name="password" placeholder="Password"/>
					</span>
	            </div>
	            <input type="button" value="Sign Up" className="signup-button"/>
            </form>
            </div>
        )
    }
}

export default SignUp;