import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
// import { Card } from "reactstrap"

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand"  to="/">
        Home
      </NavLink>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/ChallengeFriends"
              className="nav-link"
              style={{ color: "darkGray" }}
              activeStyle={{ color: "red" }}
              exact
            >
              Challenge Friends
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/GlobalChallenge"
              className="nav-link"
              style={{ color: "darkGray" }}
              activeStyle={{ color: "red" }}
              exact
            >
              Global Challenge
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/LocalChallenge"
              className="nav-link"
              style={{ color: "darkGray" }}
              activeStyle={{ color: "red" }}
              exact
            >
              Local Challenge
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/SoloChallenge"
              className="nav-link"
              style={{ color: "darkGray" }}
              activeStyle={{ color: "red" }}
              exact
            >
              Solo Challenge
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar