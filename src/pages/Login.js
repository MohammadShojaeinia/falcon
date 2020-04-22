import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



class Login extends Component {
    render() {
        return (
            <div style={{ marginTop: 20 }} className='container'>
                <h1>User Registration Form</h1>
                <form onSubmit="form-group">
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input placeholder="Password" className="form-control" name="password" type="password" id="password" autoComplete="current-password" />
                        <small id="password-helper-text" className="form-text text-muted">Must be at least 6 characters, both upper and lower case letters, a number, and a special character.</small>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Login" className='btn btn-primary' />
                    </div>
                    <div className="form-group">
                        <p> Dont have an Account<Link to="/Register"> Create one</Link></p>
                    </div>
                </form>
            </div>
        );
    }
}





export default Login;
