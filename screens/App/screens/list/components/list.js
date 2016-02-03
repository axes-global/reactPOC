import React from 'react';

class AddList extends React.Component {
    render(){
        return (
            <div className="components-list-container">
                <h1>Classified</h1>
                <ul className="components-list-heading">
                    <li>
                        <div>Title</div>
                        <div>Description</div>
                        <div>Amount</div>
                        <div>Uploaded Date</div>
                    </li>
                    <li>
                        <div>Mobile to be sold</div>
                        <div>
                            <ul className="component-desc-list">
                                <li>Iphone 5s</li>
                                <li>1 year old</li>
                                <li>with waranty card and earphones</li>
                            </ul>     
                        </div>
                        <div>20000</div>
                        <div>25-08-2015</div>
                    </li>
                    <li>
                        <div>Room for sharing</div>
                        <div>
                            <ul className="component-desc-list">
                                <li>2 Rooms available</li>
                                <li>Near to office</li>
                                <li>With Kitchen and food facility</li>
                            </ul>
                        </div>
                        <div>5000 per person</div>
                        <div>10-9-2015</div>
                    </li>
                    <li>
                        <div>Bike to be sold</div>
                        <div>
                            <ul className="component-desc-list">
                                <li>Passion Pro 2010 model</li>
                                <li>35000kms run</li>
                                <li>5 years old</li>
                            </ul>
                        </div>
                        <div>35000</div>
                        <div>15-10-2015</div>
                    </li>
                    <li>
                        <div>Car Pooling</div>
                        <div>
                            <ul className="component-desc-list">
                                <li>Have i20</li>
                                <li>3 seats available</li>
                                <li>From Subash Nagar</li>
                            </ul>
                        </div>
                        <div>500 per person</div>
                        <div>20-12-2015</div>
                    </li>
                </ul>
            </div>	
        );
    }
};

export default AddList;
