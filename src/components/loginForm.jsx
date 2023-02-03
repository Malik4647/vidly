import React, { Component } from 'react';

class LoginForm extends Component {

    handleOnSubmit = e => {
        e.preventDefault();
        console.log("Submitted");
    }

    render() {
        return (
            <div>
                <h1>LoginForm</h1>
                <form onSubmit={this.handleOnSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input id='username' type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id='password' type="text" className="form-control" />
                    </div>
                    <button className="btn btn-primary mt-1">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;