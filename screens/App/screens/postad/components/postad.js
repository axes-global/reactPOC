import React from 'react';

class PostAd extends React.Component {
    render() {
        return (
        	<div className="postad-container">
            <h1>Post Your Ad</h1>
            <form className="postad-form">
            	<div className="credentials-wrapper">
	            	<label>Title<span className="required">*</span></label>
					  <input type="text" name="Username" placeholder="Title" required/>
	            </div>    
	            <div className="credentials-wrapper">
	            	<label>Description<span className="required">*</span></label>
  						<textarea rows="4" cols="50" placeholder="Description of your content" name="description" required></textarea>
	            </div>
	            <div className="credentials-wrapper">
	            	<label>Browse</label>
						<input type="file" name="password" placeholder="Password" />
	            </div>
	            <input type="submit" value="Post Ad" className="postad-button"/>
            </form>
            </div>
        )
    }
}

export default PostAd;