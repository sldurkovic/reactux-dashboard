import React from 'react';

class Wrapper extends React.Component {
    render() {
        const login = () => {
            Model.authenticateUser();
            this.props.router.push('/');
        };
        return <div>
            <button onClick={login}>Login</button>
        </div>;
    }
}

Wrapper.propTypes = {
    router: React.PropTypes.object
};

class ModelClass {
    constructor() {
        this.userAuthenticated = true;
    }

    authenticateUser() {
        this.userAuthenticated = true;
    }

    isAuthenticated() {
        return this.userAuthenticated;
    }

}
const Model = new ModelClass();

export default {Wrapper, Model}


