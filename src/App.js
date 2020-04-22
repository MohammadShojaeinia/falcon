import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Register from './pages/Register.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Login from './pages/Login.js';


function App() {
  return (
    <Router>
      <div className="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <Link to="/" className="nav-link">Falcon</Link>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                  <Link to="/Login" className="nav-link">Login</Link>
                </li>
              </ul>
            </form>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
        </Switch>

        <footer className='footer bg-white text-dark'>
          <div className='container-fluid'>
            <ul className='list-inline'>
              <li className='list-inline-item'><Link to="/About">About</Link ></li>
              <li className='list-inline-item'>&copy; Falcon 2020 </li>
            </ul>
          </div>
        </footer>
      </div >
    </Router >
  );
}

export default App;
