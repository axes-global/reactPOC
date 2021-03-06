import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import MyHeader from './screens/App/screens/shared/components/header';
import MyFooter from './screens/App/screens/shared/components/footer';
import Login from './screens/App/screens/login/components/login';
import SignUp from './screens/App/screens/signup/components/SignUp';
import ForgetPassword from './screens/App/screens/forgetpassword/components/ForgetPassword';
import AddList from './screens/App/screens/list/components/list';
import PostAd from './screens/App/screens/postad/components/postad';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <header id="header">
                    <MyHeader />
                </header>
                {this.props.children}
                <div className="footer-space">&nbsp;</div>
                <footer id="footer">
                    <MyFooter/>
                </footer>
            </div>
        );
    }
}

export default App;

ReactDOM.render((
        <Router>
            <Route path="/" component={App}>
                <Route path="list" component={AddList}/>
                <Route path="login" component={Login}/>
                <Route path="signup" component={SignUp}/>
                <Route path="forget" component={ForgetPassword}/>
                <Route path="postad" component={PostAd}/>
            </Route>
        </Router>
    ),
    document.body
);
