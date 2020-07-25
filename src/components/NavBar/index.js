import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Challenge Friends
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/discover"
              className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
            >
             Global Challenge
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Local Challenge
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
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