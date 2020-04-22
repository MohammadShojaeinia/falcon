import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fullname: null,
      email: null,
      password: null,

    }
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  onSubmit = (e) => {
    e.preventDefault();
    const { fullname, email, password } = this.state;

    axios.post('/api/auth/register', { fullname, email, password })
      .then((result) => {
        // this.props.history.push("/login")
        console.log("User created");
      });
  }


  render() {
    const { fullname, email, password } = this.state;
    return (
      <div style={{ marginTop: 20 }} className='container'>
        <h1>User Registration</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="inputfirstname">Full Name</label>
            <input type="text" className="form-control" name="fullname" placeholder="Full Name" value={fullname} onChange={this.onChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="inputemail">Email address</label>
            <input type="email" className="form-control" name="email" placeholder="Enter email" value={email} onChange={this.onChange} required />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div className="form-group">
            <label htmlFor="inputpassword">Password</label>
            <input placeholder="Password needs at least 6 characters" className="form-control" name="password" type="password" value={password} onChange={this.onChange} required />
            <small id="password-helper-text" className="form-text text-muted">Must be at least 6 characters, both upper and lower case letters, a number, and a special character.</small>
          </div>
          <div className="form-group">
            <input type="submit" value="Register" className='btn btn-primary' />
          </div>
        </form>
      </div>
    );
  }
}




export default Register;
