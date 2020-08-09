import React, { useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import './style.css'
// import { Card } from "reactstrap"

function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);



  return (
    <div>
    <nav className="navbar navbar-expand navbar-light bg-light"
      style={{ margin: "0px" }}>
      <NavLink className="navbar-brand" to="/">
        <img className="welcome_navbrand_img" src={process.env.PUBLIC_URL + "/assets/images/logo/apple-touch-icon.png"} alt="EW icon"
          style={{ width: "30px", height: "30px" }} />
      </NavLink>
      <div>

        <ul className="navbar-nav">
        <li className="nav-item d-none d-sm-block">
            <NavLink
              to="/"
              className="nav-link"
              style={{ color: "darkGray" }}
              activeStyle={{ color: "red" }}
              exact
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/AddWorkout"
              className="nav-link"
              style={{ color: "darkGray" }}
              activeStyle={{ color: "red" }}
              exact
            >
              Add Workout
            </NavLink>
          </li>
          <li>
            <Dropdown
              isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle
                style={{ color: "darkGray", backgroundColor: "#F8F9FA" }}
                activeStyle={{ color: "red" }}
                outline color="none"
                caret>
                Challenges
        </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <NavLink
                    to="/ChallengeFriends"
                    className="nav-link"
                    style={{ color: "darkGray" }}
                    activeStyle={{ color: "red" }}
                    exact
                  >
                    Challenge Friends
            </NavLink>
                </DropdownItem>

                <DropdownItem>
                  <NavLink
                    to="/GlobalChallenge"
                    className="nav-link"
                    style={{ color: "darkGray" }}
                    activeStyle={{ color: "red" }}
                    exact
                  >
                    Global Challenge
            </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    to="/LocalChallenge"
                    className="nav-link"
                    style={{ color: "darkGray" }}
                    activeStyle={{ color: "red" }}
                    exact
                  >
                    Local Challenge
            </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    to="/SoloChallenge"
                    className="nav-link"
                    style={{ color: "darkGray" }}
                    activeStyle={{ color: "red" }}
                    exact
                  >
                    Solo Challenge
            </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default NavBar