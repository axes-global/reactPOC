import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import MyHeader from './screens/App/screens/shared/components/header';
import LoginPanel from './screens/App/screens/login/components/login';
import SignUp from './screens/App/screens/login/components/SignUp';
import ForgetPassword from './screens/App/screens/login/components/ForgetPassword';
import AddList from './screens/App/screens/list/components/list';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <header id="header">
                    <MyHeader />

                </header>
                
                <div id="login-panel" align="center">
                    <LoginPanel />
                </div>
            </div>
        );
    }
}

export default App;

ReactDOM.render((
        <Router>
            <Route path="/" component={App}>
                <Route path="signup" component={SignUp}/>
                <Route path="forget" component={ForgetPassword}/>
            </Route>
        </Router>
    ),
    document.body
);
