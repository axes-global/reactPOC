import React from 'react';
import ReactDOM from 'react-dom';
import MyHeader from './screens/App/screens/shared/components/header';
import LoginPanel from './screens/App/screens/login/components/login';

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

ReactDOM.render(<App />, document.querySelector('body'));

