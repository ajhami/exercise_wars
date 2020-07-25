import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
// import { Card } from "reactstrap"

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand"  to="/">
        Home
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/ChallengeFriends"
              className={
                window.location.pathname === "/ChallengeFriends" || window.location.pathname === "/ChallengeFriends"
                  ? "nav-link active" 
                  : "nav-link"
              }
            >
              Challenge Friends
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/GlobalChallenge"
              style={{ color: "darkGray" }}
              activeStyle={{ color: "red" }}
              exact
            // className={window.location.pathname === "/GlobalChallenge" ? "nav-link active" : "nav-link"}
            >
              Global Challenge
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/LocalChallenge"
              style={{ color: "darkGray" }}
              activeStyle={{ color: "red" }}
              exact
            // className={window.location.pathname === "/LocalChallenge" ? "nav-link active" : "nav-link"}
            >
              Local Challenge
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/SoloChallenge"
              style={{ color: "darkGray" }}
              activeStyle={{ color: "red" }}
              exact
              // className={window.location.pathname === "/SoloChallenge" ? "nav-link active" : "nav-link"}
            >
              Solo Challenge
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar