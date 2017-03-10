import React from 'react';
import AuthModule from './components/auth/AuthModule';
import {Link} from 'react-router';

class Wrapper extends React.Component {

    componentWillMount() {
        if (!AuthModule.Model.isAuthenticated()) {
            this.props.router.push('/login');
        }
    }

    render() {
        return <div>
            <Sidebar />
            <Main children={this.props.children}/>
        </div>;
    }
}

Wrapper.propTypes = {
    router: React.PropTypes.object,
    children: React.PropTypes.object
};

class NavLink extends React.Component {
    render() {
        let isActive = this.context.router.isActive(this.props.to, true);
        return <li className={isActive ? 'active' : ''}><Link style={{display:'block'}} {...this.props} /></li>;
    }
}

NavLink.contextTypes = {
    router: React.PropTypes.object
};
NavLink.propTypes = {
    to: React.PropTypes.string,
};

const Sidebar = () => (
    <div className="nav-side-menu">
        <div className="brand">Reactux Dashboard</div>
        <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"/>

        <div className="menu-list">

            <ul id="menu-content" className="menu-content collapse out">
                <NavLink to="/"> <i className="fa fa-dashboard fa-lg"/> Dashboard</NavLink>
                <li data-toggle="collapse" data-target="#service" className="collapsed">
                    <a href="#"><i className="fa fa-globe fa-lg"/> Services <span className="arrow"/></a>
                </li>
                <ul className="sub-menu collapse" id="service">
                    <li>New Service 1</li>
                    <li>New Service 2</li>
                    <li>New Service 3</li>
                </ul>
                <NavLink to="/about"><i className="fa fa-user fa-lg"/> About</NavLink>
            </ul>
        </div>
    </div>
);

const Main = ({children}) => (<div className="main">{children}</div>);
Main.propTypes = {
    children: React.PropTypes.object
};

export default {Wrapper};
