import React from 'react';
import {Router, Route, Redirect, IndexRoute, hashHistory} from 'react-router';
import AuthModule from './components/auth/AuthModule';
import ApplicationShell from './ApplicationShell';

class App extends React.Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.object,
};

const Welcome = function() {
    return <div>Welcome to the dashboard</div>;
};


const About = function() {
    return <div>About</div>;
};

const AppRoutes = () =>
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route component={ApplicationShell.Wrapper}>
                <IndexRoute component={Welcome}/>
                <Route path="about" component={About}/>
            </Route>
            <Route path="login" component={AuthModule.Wrapper}/>
            <Redirect path="*" to="/"/>
        </Route>
    </Router>;
export default AppRoutes;