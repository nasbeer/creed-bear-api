import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Link, Switch, Route } from "react-router-dom";
import User from "./components/User";
import Add from "./components/Add";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <a href="/users" className="navbar-brand">
         Creed Bear
        </a>

        <Link to="" />
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/users"} className="nav-link">
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add New User
            </Link> 
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/users"]} component={User} />
          <Route  path="/add" component={Add} /> 
        </Switch>
      </div>
    </div>
  );
}

export default App;
